import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Cart from "../../models/Cart";
import connectDb from "../../utils/connectDb";

connectDb();
const { ObjectId } = mongoose.Types

export default async(req, res) => {

  switch(req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;

    case "PUT":
      handlePutRequest(req, res);
      break;

    case "DELETE":
      handleDeleteRequest(req, res)
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`)
      break

  }
}

async function handleDeleteRequest(req, res) {
  if (!("authorization" in req.headers)) {
    return res.status(401).json({ success: false, msg: "No authorization token" })
  }

  try {
    const { productId } = req.query;
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    const filter = { user: userId }
    const update = { $pull: { products: { product: productId }}}
    const cart = await Cart.findOneAndUpdate(filter, update, { new: true }).populate({
      path: "products.product",
      model: "Product",
    })

    res.status(200).json({ success: true, products: cart.products})

  } catch(error) {
    console.log("error delete", error)
    res.status(403).send("Please, login again.")

  }
}

async function handlePutRequest(req, res) {
  if (!("authorization" in req.headers)) {
    return res.status(401).json({ success: false, msg: "No authorization token" })
  }

  try {
    const { quantity, productId } = req.body;
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

    //get user cart based on userId
    const filer = { user: userId }
    const cart = await Cart.findOne(filer)
    //check if product already exist
    const productExist = cart.products.some(doc => ObjectId(productId).equals(doc.product)) //verifica se pelo menos 1 existe e retorna true
    //if so, increment quantity,
    if (productExist) {
      const filter = { _id: cart._id, "products.product": productId }
      const update = { $inc: { "products.$.quantity": quantity }}
      const response = await Cart.findOneAndUpdate(filter,update)

      if (response) {
        res.status(200).json({ success: true, msg: "Product updated successfully" })
      } else {
        res.status(403).send("Add product fail")
      }

    //if not, add new product with quantity
    } else {
      const newProduct = { quantity, product: productId }
      const filter = { _id: cart._id }
      const update = { $addToSet: { products: newProduct }}
      const response = await Cart.findOneAndUpdate(filter,update)

      if (response) {
        res.status(200).json({ success: true, msg: "Product updated successfully" })
      } else {
        res.status(403).send("Add product fail")
      }
    }
  } catch(error) {
    console.log("error put", error)
    res.status(403).send("Please, login again.")
  }

}

async function handleGetRequest(req, res) {

  if (!("authorization" in req.headers)) {
    return res.status(401).json({ success: false, msg: "No authorization token" })
  }

  try {
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    const cart = await Cart.findOne({ user: userId }).populate({
      path: "products.product",
      model: "Product"
    })

    if (res.statusCode == 200) {
      res.status(200).json({success: true, cart: cart.products})
    } else {
      res.status(403).json({ success: false, msg: "Something went wrong."})
    }

  } catch(error) {
    console.log("error get", error)
    res.status(403).json({ success: false, msg: "Please, login again."})
  }
}
import Product from "../../models/Product";
import Cart from "../../models/Product";
import connectDb from "../../utils/connectDb";
import mongoose from "mongoose"

const { ObjectId } = mongoose.Schema.Types;

connectDb(); 

export default async(req, res) => {
  switch(req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
}

async function handleGetRequest(req, res) {
  const product = await Product.findOne({ _id: req.query.id });
  if (res.status(200)) {
    res.json({ success: true, product: product });
  } else {
    res.status(422).send("Product loading error");
  }
}

async function handlePostRequest(req, res) {
  try {
    const { name, price, description, mediaUrl } = req.body
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).send("Product missing one or more fields");
    }
  
    await new Product({
      name, 
      price, 
      description, 
      mediaUrl
    }).save()

    if (res.statusCode == 200) {
      res.status(201).json({ success: true })
    } else {
      res.status(res.statusCode).json({ success: false, err_code: res.statusCode })
    }
    
  } catch(error) {
    res.status(500).send("Server error in creating");
  }
 
} 

async function handleDeleteRequest(req, res) {
  const _id = req.query.id

  try {
    //1) Delete product from ID
    await Product.findOneAndDelete({ _id });
    //2) Delete from all cart, referenced as 'product' (se eu nao fizer, vai dar erro no carrinho e vai dar merda)
    await Cart.updateMany(
        { "products.product": _id },
        { $pull: { products: { product: _id } } }
      );
    res.status(204).json({})

  } catch(errors) {
    console.error(errors)    
    res.status(500).send("Error deleting product")
  }
}


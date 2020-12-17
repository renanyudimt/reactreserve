import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

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
    case "PUT":
      await handlePutRequest(req, res);
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
    res.json({ success: false, msg: "Product loading error", code: res.statusCode });
  }
}

async function handlePostRequest(req, res) {
  try {
    const { name, price, description, mediaUrl } = req.body
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).json({ success: false, msg: "Product missing one or more fields" });
    }
  
    await new Product({
      name, 
      price, 
      description, 
      mediaUrl
    }).save()

    if (res.statusCode == 200) {
      res.send(201).json({ success: true })
    } else {
      res.send(res.statusCode).json({ success: false, err_code: res.statusCode })
    }
    
  } catch(error) {
    res.status(500).send("Server error in creating");
  }
 
} 

async function handleDeleteRequest(req, res) {
  await Product.findOneAndDelete({ _id: req.query.id });
  if (res.status(204)) {
    res.json({})
  }
}

async function handlePutRequest(req, res) {

}
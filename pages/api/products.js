import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb(); 

export default async (req, res) => {
  const { page, size } = req.query;

  //convert string value to number:
  const pageNum = Number(page);
  const pageSize = Number(size);
  let products = [];
  const totalDocs = await Product.countDocuments()
  const totalPages = Math.ceil(totalDocs / pageSize)
  try {
    if (pageNum == 1) {
      products = await Product.find().limit(pageSize)
    } else {
      const skips = pageSize * (pageNum - 1)
      products = await Product.find().skip(skips).limit(pageSize)
    }

    if (res.statusCode == 200) {
      res.status(200).json({success: true, products: products, totalPages: totalPages})
    } else {
      res.json({success: false})
    }

  } catch(error) {
    res.status(500).send("Server error in creating");
  }
}
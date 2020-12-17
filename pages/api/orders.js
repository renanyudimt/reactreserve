import Order from "../../models/Order"
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb"

connectDb()
export default async (req, res) => {
  try {
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    const orders = await Order.find({ userId: userId }).populate({
      path: "products.product",
      model: "Product"
    })
    //populate serve pra buscar as informaçoes do produto baseado no model Product, se nao tiver isso nao busca todas as infos dos produtos
    //o que nao é interessante, uma vez que se com populate eu posso popular os dados de acordo com o id e o model de Product ao inves de
    //repetir informaçoes em order (colocar todos os dados dos produtos)
    res.status(200).json({success: true, orders: orders})
  } catch(error) {
    res.status(403).send("Please, login again.")
  }
}
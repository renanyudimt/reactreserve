import Order from "../../models/Order"
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb"

connectDb()
export default async (req, res) => {
  try {
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    const orders = await Order.findOne({ userId: userId })
    res.status(200).json({success: true, orders: orders})
  } catch(error) {
    res.status(403).send("Please, login again.")
  }
}
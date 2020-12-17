import User from "../../models/User";
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb";
import { destroyCookie } from "nookies"

connectDb();

export default async (req, res) => {
  if (!("authorization" in req.headers)) {
    return res.status(401).send("No authorization token");
  }

  try {
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: userId })

    if (user) {
      res.status(200).json({ success: true, user: user })
    } else {
      res.status(404).json({ success: false, msg: "User not found" })
    }

   } catch(error) {
    res.status(403).json({ success: false, msg: "Invalid token" })
  }
}
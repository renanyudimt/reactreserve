import connectDb from "../../utils/connectDb";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    //1) Check if user exist
    const user = await User.findOne({ email }).select("+password") //no model, select ta false, entao nao tras, com esse select, vai mostrar se achar um usuario com email tal

    //2) --if not, return error
    if (!user) {
      return res.json({ success: false, msg: "User email or password is incorrect" });
    }

    //3) check if users password is correct
    const passMatch = await bcrypt.compare(password, user.password) //comparando os 2 

    //4) --if so, generate token
    if (passMatch) {
      const token = jwt.sign({userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
  
      //5) send token to client
      return res.status(200).json({ success: true, token: token, user: user })
    } else {
      return res.status(401).json({ success: false, msg: "User email or password is incorrect" });
    }

  } catch(error) {
    console.log(error); 
    res.status(500).send("Error logging in user")
  }
}
import connectDb from "../../utils/connectDb";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLenght from "validator/lib/isLength";
import Cart from "../../models/Cart";

connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //0) Validade name/email/pass
    if (!isLenght(name, { min: 3, max: 10})) {
      return res.status(422).json({ success: false, msg: "Name must be 3-10 characters long."})
    } else if(!isLenght(password, { min: 4 })) {
      return res.status(422).json({ success: false, msg: "Password must be at least 4 characters long."})
    } else if (!isEmail(email)) {
      return res.status(422).json({ success: false, msg: "Email not valid" })
    }

    //1) Check if user exist
    const user = await User.findOne({email: email})
    if (user) {
      return res.status(422).json({ success: false, msg: "User already exist." })
    } 

    //2) --if not, hash their password
    const hash = await bcrypt.hash(password, 10) //saltRounds 10
    
    //3) create user
    const newUser = await new User({
      name: name,
      email: email, 
      password: hash
    }).save();

    //3.5) create new cart for user
    await new Cart({ user: newUser._id }).save();
    
    //4) create token for the new user
    //em 7 dias, o token n sera mais valido e o usuario tera que logar de novo pra gerar outro
    const token = jwt.sign({ userId: newUser._id}, process.env.JWT_SECRET, { expiresIn: '7d'})

    //5) send back token
    res.status(201).json({success: true, token: token})
  } catch(error) {
    console.log(error)
    res.status(500).json({"success": false, "msg": "Error signup user. Please, try again later"})
  }
}
import Stripe from "stripe"
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken"
import Cart from "../../models/Cart"
import Order from "../../models/Order"
import calculateCartTotal from "../../utils/calculateCartTotal"

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

export default async function(req, res) {
  const { paymentData } = req.body;
  try {
    //1) Verify and get user from token
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    //2) Find Cart based on user id, populate it
    const cart = await Cart.findOne({ user: userId }).populate({
      path: "products.product",
      model: "Product"
    })
    //3) Calculate cart totals again from cart products
    const { cartTotal, stripeTotal } = calculateCartTotal(cart.products) 
    //4) Get de email from payment data, see if email linked with existing stripe customer 
    const previousCustomer = await stripe.customers.list({
      email: paymentData.email,
      limit: 1
    })
    const isExistingPreviousCustomer = previousCustomer.data.length > 0
    //5) if not, create them based on their email
    let newCustomer;

    if (!isExistingPreviousCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentData.eamil,
        source: paymentData.id
      })
    }

    const customer = (isExistingPreviousCustomer && previousCustomer.data[0].id) || newCustomer.id; 
    
    //6) Create charge with total, send receipt Email
    await stripe.charges.create({
      currency: "USD",
      amount: stripeTotal,
      receipt_email: paymentData.email,
      customer,
      description: `Checkout | ${paymentData.email} | ${paymentData.id}` 
    }, {
      //necessario para verificar se a folha de pagamento,
      //por qualquer que seja o motivo, nao foi executada mais de 1x, para evitar isso, se colocar uma unique string
      idempotencyKey: uuidv4() 
    })
    //7) Add order data to database 
    const order = await new Order({
      userId: userId,
      email: paymentData.email,
      total: cartTotal,
      products: cart.products
    }).save()

    //8) Clear products in cart
    await Cart.findOneAndUpdate(
      { _id: cart._id },
      { $set: { products: [] }}
    )
    //9) Send back success (200) response
    res.status(200).json({ success: true, msg: "Checkout successful"})
  } catch(error) {
    console.log("error", error)
    res.status(500).send("Error processing charge")
  }
}
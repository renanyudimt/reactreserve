import mongoose from "mongoose";

const { ObjectId, String, Number } = mongoose.Schema.Types

const CartSchema = new mongoose.Schema({ 
  user: {
    type: ObjectId,
    ref: "User", //model name que esta sendo referenciado, no caso, o User. Nota: é melhor referenciar do que criar tudo de novo ne ?
  },
  products: [
    {
      quantity: {
        default: 1,
        type: Number
      },
      product: {
        type: ObjectId,
        ref: "Product" 
      }
    }
  ]
})

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema)
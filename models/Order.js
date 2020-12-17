import mongoose from "mongoose"

const { ObjectId, Number, String } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema({
  userId:{
    type: ObjectId,
    ref: "User"
  },
  products: [
    {
      quantity: {
        type: Number,
        default: 1
      },
      product: {
        type: ObjectId,
        ref: "Product"
      }
    }
  ],
  email:{
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true
  } 
}, {
  timestamps: true
})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)
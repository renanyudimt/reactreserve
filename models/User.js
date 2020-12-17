import mongoose, { mongo } from "mongoose";

const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false //password will not be provided when we find for a user
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ["user", "admin", "root"]
  }
}, {
  timestamps: true //irá pegar o create date e update date de tudo
})

export default mongoose.models.User || mongoose.model("User", UserSchema) //usa um existe um cria outro
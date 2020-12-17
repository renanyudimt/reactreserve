import mongoose from "mongoose";

async function connectDb() {
  // Use existing database connection
  if (mongoose.connection.readyState) {
    return console.log("utilizando conexao existente")
  }

  // Use new database connection
  const db = await mongoose.connect(
    process.env.MONGO_SRV, 
    {
      useCreateIndex: true, 
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => { 
    console.log("success")
  })
  .catch(error => console.log(error))

}

export default connectDb
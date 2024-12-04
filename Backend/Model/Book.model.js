import mongoose from "mongoose";

const bookschema = mongoose.Schema({
  name: String,
  price:Number,
  category: String,
  img: String,
  description: String, 
})

const Bookstore = mongoose.model("Book",bookschema);

export default Bookstore;
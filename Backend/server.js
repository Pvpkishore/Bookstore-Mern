import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import bookRoute from './Route/book.route.js'
import userRoute from './Route/user.route.js'

dotenv.config();
const app = express();

app.use(cors(
  {
  origin: ["bookstore-mern-eta.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
  }
));
app.use(express.json());

const port = 3000
const url = process.env.Mongourl;


//Connect to DB
try {
  mongoose.connect(url,{
    useNewUrlparser:true,
    useunifiedTopology:true
  });
  console.log('Connected!');
} catch (error) {
  console.log("Error: ",error)
}

//Defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";

dotenv.config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: ["https://bookstore-mern-eta.vercel.app"], // Add `https://`
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Middleware to parse JSON
app.use(express.json());

// Port and MongoDB URL
const port = process.env.PORT || 3000; // Use environment variable for port
const url = process.env.MONGODB_URL; // Ensure the variable matches your `.env`

// Connect to MongoDB
mongoose
  .connect(url, {
    useNewUrlParser: true, // Correct property name
    useUnifiedTopology: true, // Correct property name
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

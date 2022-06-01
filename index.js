import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/product.js";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 9000, () =>
  console.log(`Server running on port : ${process.env.PORT}`)
);

const DB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});
  console.log(`mongo connected host : ${conn.connection.host}`);
};

DB();

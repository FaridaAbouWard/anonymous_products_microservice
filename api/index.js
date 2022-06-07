import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "../routes/product.js";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());
// app.use("/api/products", productRoute);

app.get('/api/products', async (req, res) => {
  let object={
      out_of_stock: [],
      in_stock: []
  }
 //res.send("display all products");
 await product.find()
 .then(products => {
     for (const product of products) {
         if(product.quantity===0){
             object.out_of_stock.push(product)
             
         }else
         object.in_stock.push(product)
         //console.log(product.quantity)
     }

    res.json(object);
 })
 .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/api/find/:search',async (req, res) => {
  const {search} = req.params;
//res.send("search for this product");
await product.find({"name": {$regex: search, $options:"i"} }) 
 .then(products => res.json(products))
 .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(process.env.PORT || 9000, () =>
  console.log(`Server running on port : ${process.env.PORT}`)
);

const DB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});
  console.log(`mongo connected host : ${conn.connection.host}`);
};

DB();

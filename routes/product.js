//const express = require('express');
import express from 'express'
//const product = require('../models/product');
import product from '../models/product.js';
const router = express.Router();

//to display all products
//router.get("/getProducts",(req,res) => {
  //  res.send("product test is successful"); //i tried to call this in server bas there's a problem!!
    //product.find()
    //  .then(product => res.json(product))
    //  .catch(err => res.status(400).json('Error: ' + err));
 // });

// to find a specific product however it's by id , it needs to be by name
  //router.route('/:id').get((req, res) => {
   // product.findById(req.params.id)
    //  .then(product => res.json(product))
    //  .catch(err => res.status(400).json('Error: ' + err));
  //});

  // router.get('/', async (req, res) => {
  //     let object={
  //         out_of_stock: [],
  //         in_stock: []
  //     }
  //    //res.send("display all products");
  //    await product.find()
  //    .then(products => {
  //        for (const product of products) {
  //            if(product.quantity===0){
  //                object.out_of_stock.push(product)
                 
  //            }else
  //            object.in_stock.push(product)
  //            //console.log(product.quantity)
  //        }

  //       res.json(object);
  //    })
  //    .catch(err => res.status(400).json('Error: ' + err));
  // });


//   router.get('/find/:search',async (req, res) => {
//       const {search} = req.params;
//     //res.send("search for this product");
//     await product.find({"name": {$regex: search, $options:"i"} }) 
//      .then(products => res.json(products))
//      .catch(err => res.status(400).json('Error: ' + err));
//  });


//missing!!!!!
  //when getting all products put a condidtion that checks quantity and if the quantity is =0 then out of stock.
//module.exports= router
export default router




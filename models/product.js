//const mongoose=require('mongoose');
//import mongoose from 'mongoose';
import mongoose from 'mongoose';
import productRoute from '../routes/product.js';

const {ObjectId}=mongoose.Schema;

const productSchema=new mongoose.Schema({
    name:{
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    quantity:{
        type: Number,
        required: true
    },

    //how to inset a photo in the json of the products??

    //photo:{
     //   data: Buffer,
     //   contentType: String
   // }
});

//module.exports=mongoose.model
export default mongoose.model("Products",productSchema);
import mongoose, { Schema } from "mongoose";


const schema = new mongoose.Schema({
    name:String,
    phone:String,
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});

export default mongoose.model('user', schema);
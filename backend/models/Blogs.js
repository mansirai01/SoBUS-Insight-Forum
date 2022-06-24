import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    imageUrl:{
        type:String,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

export default mongoose.model("Blog",blogSchema);
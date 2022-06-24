import mongoose from "mongoose";

const bizSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    locationUrl:{
        type:String,
    },
    contact : {
        type:String,
    },
    owner:{
        type:String,
    },
    socialProfile: {
        type: String
    },
    tags: {
        type: String
    }
},{timestamps:true});

export default mongoose.model("Biz",bizSchema);
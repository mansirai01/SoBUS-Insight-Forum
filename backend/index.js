import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload"

import authRoute from "./routes/Auth.js";
import blogRoute from "./routes/Blog.js";
import bizRoute from "./routes/Biz.js";

const app=express();

app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))
app.use(express.json());

dotenv.config();

const connect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://cfg:codeforgoods43@cluster0.yzwky.mongodb.net/database?retryWrites=true&w=majority");
        console.log("Connected to database");
    }catch(err){
        console.log(err);
    }
}

app.use("/auth",authRoute);
app.use("/blog",blogRoute);
app.use("/biz",bizRoute);



app.listen(8000,(req,res)=>{
    connect();
    console.log("Server running on PORT 8000");
})

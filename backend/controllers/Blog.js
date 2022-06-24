import User from "../models/User.js";
import Blogs from "../models/Blogs.js";
import bcryptjs from "bcryptjs";

import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: "djfokbl7s",
    api_key: "112161477493658",
    api_secret: "oxdLbEEBzv50mKQtcVZWHbzvlM4",
})

export const addBlog=async(req,res)=>{
    const file=req.files.imageUrl;
    try{
        const newBlog = new Blogs({
            title: req.body.title,
            description:req.body.description,
            owner: '629b6b581115b1f39f7a7138'
        })
        const savedBlog = await newBlog.save();
        
        cloudinary.uploader.upload(file.tempFilePath, (res, err) => {
            const url=res.url
            const uploadImage=async()=>{
                const blognew=await Blogs.findByIdAndUpdate(savedBlog._id,{
                    imageUrl:url
                })
                console.log("ok");
            }
            uploadImage();
        })

        res.status(200).send("Uploaded!")
    }catch(err){
        console.log(err);
        res.status(500).send("Error");
    }
}


export const getAllBlog = async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
    } catch (err) {
        console.log(err);
        res.status(500).json("Error");
    }
}
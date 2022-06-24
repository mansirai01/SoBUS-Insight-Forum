import User from "../models/User.js";
import Biz from "../models/Biz.js";
import bcryptjs from "bcryptjs";

export const addBiz=async(req,res)=>{
    try{
        const newBiz = new Biz({
            name: req.body.name,
            description:req.body.description,
            owner: req.body.owner,
            locationUrl: req.body.locationUrl,
            contact: req.body.contact,
            socialProfile: req.body.socialProfile,
            tags: req.body.tags
        })
        const savedBiz = await newBiz.save();

        res.status(200).send("Created!")
    }catch(err){
        console.log(err);
        res.status(500).send("Error");
    }
}


export const getAllBiz = async (req, res) => {
    try {
        const bizs = await Biz.find();
        res.status(200).json(bizs);
    } catch (err) {
        console.log(err);
        res.status(500).json("Error");
    }
}
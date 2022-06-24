import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export const register=async(req,res)=>{
    try{
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(req.body.password, salt);

        var findUser = await User.findOne({ email: req.body.email });
        
        if (findUser) {
            return res.status(200).json("Email already presernt !");
        }
        
        const newUser = new User({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            password: hash
        })
        
        const savedUser = await newUser.save();
        res.status(200).send(savedUser)
    }catch(err){
        console.log(err);
        res.status(500).send("Error");
    }
}

export const login = async (req, res) => {
    try {
        var findUser;
        if (!req.body.email || !req.body.password) {
            return res.status(200).send("Please enter all the fields !");
        }
        findUser = await User.findOne({ email: req.body.email });
        if (!findUser) {
            return res.status(200).send("Invalid Credentials !");
        }
        const check = await bcryptjs.compare(req.body.password, findUser.password);
        if (!check) {
            return res.status(200).send("Invalid Credentials !");
        }
        res.status(200).send(findUser);

    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
}
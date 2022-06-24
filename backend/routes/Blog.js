import express from "express";
import {addBlog, getAllBlog} from '../controllers/Blog.js';


const router=express.Router();

router.post("/add",addBlog);
router.get("/getall",getAllBlog)

export default router;
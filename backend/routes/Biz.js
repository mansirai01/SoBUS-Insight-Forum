import express from "express";
import {addBiz, getAllBiz} from '../controllers/Biz.js';


const router=express.Router();

router.post("/add",addBiz);
router.get("/getall",getAllBiz)

export default router;
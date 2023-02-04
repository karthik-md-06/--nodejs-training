import express from "express";

import { addblog, deleteblog, getallblog, getbyid, getuserByid, updateblog } from "../controllers/blogcontroller";

const router=express.Router();

router.get('/',getallblog);
router.post('/addblog',addblog);
router.patch('/update/:id',updateblog)
router.get('/:id',getbyid);
router.delete('/delete/:id',deleteblog)
router.get('/user/:id',getuserByid);

export default router;
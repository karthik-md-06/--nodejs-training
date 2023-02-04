
import express from 'express';
import { getalluser, login, signup } from '../controllers/usercontroller';


const userrouter=express.Router();

userrouter.get('/',getalluser);
userrouter.post('/createuser',signup);
userrouter.post('/login',login)

export default userrouter;




const  User=require('../models/user');

const bcrypt=require('bcryptjs');

const jwt=require('jsonwebtoken');

const SECRET_KEY="HELLOWORLD";

 const signup=async(req,res)=>{
    const {username,email,password}=req.body;
        try {
            const existingUser=await User.findOne({email});
            if(existingUser){
                return res.status(400).json({message:"User already exists"});
            }

            const hashpassword=bcrypt.hashSync(password);

            const result=await User.create({
                email:email,
                password:hashpassword,
                username:username
            })
            const token=jwt.sign({email:result.email,id:result._id},SECRET_KEY);
            res.status(201).json({user:result,token:token});

            
        } catch (error) {
                console.log(error);
                return res.status(500).json({message:"something went wrong"});   
        }
}
 const signin=async(req,res)=>{
    const{email,password}=req.body;
    try {
        const existingUser=await User.findOne({email:email});
        if(!existingUser){
            res.status(400).json({message:"user not found"})
        }
            const matchpassword=bcrypt.compareSync(password,existingUser.password);
            if(!matchpassword){
                return res.status(400).json({message:"Invalid credentials"});
            }
            const token=jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY);
            res.status(201).json({user:existingUser,token:token});
    } catch (error) {
        console.log(error);
                return res.status(500).json({message:"something went wrong"});  
    }
}
module.exports={signup,signin}


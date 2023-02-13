const mongoose=require('mongoose');

const schema=mongoose.Schema;

const user=new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
})

module.exports=mongoose.model("User",user)
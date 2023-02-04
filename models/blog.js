import mongoose from "mongoose";
var schema=mongoose.Schema;

const blogschema=new schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true,
        
    },
    image:{
        type:String,
        required:true,
        
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'USER',
        required:true
    }
})

export default mongoose.model("Blog",blogschema);
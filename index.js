//const { urlencoded } = require("express");
const express=require("express");
const uploadroute=require("./uploadRouter");

const app=express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(uploadroute);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");  
})

app.listen(5000,()=>{
    console.log("server is listening to the port 5000");
})
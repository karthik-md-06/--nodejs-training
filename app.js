
const express=require('express');

const mongoose=require('mongoose');
const { userRouter } = require('./routes/userroute');


const app=express();

mongoose.set('strictQuery',true);

app.use(express.json())

app.use('/user',userRouter);

mongoose.connect('mongodb+srv://admin:admin@cluster0.t6hitcy.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    app.listen(4000,()=>{
            console.log("Server connected to 4000 port");
    })
})






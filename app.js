const express=require('express');

const route=require('./routes/people');

const app=express();

app.use(express.json)

app.use('/people',route);


app.listen(2000,()=>{
    console.log("server is listening to the 2000 port");
})
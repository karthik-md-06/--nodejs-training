const express=require('express');

const eventEmitter=require('events');


const event=new eventEmitter();

const app=express();

let count=0;

event.on('countapis',()=>{
    count++;
    console.log("Api clicked",count);
})

app.get('/',(req,res)=>{
    res.send("Basic api");

    event.emit('countapis');
})
app.get('/update',(req,res)=>{
    res.send("update api")

    event.emit('countapis');
})
app.get('/delete',(req,res)=>{
    res.send("delete api");
    event.emit('countapis');
})

app.listen(5000,()=>{
    console.log("server is listening to the 5000");
})
const express=require("express");

//const body=require("body-parser");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

let people={people:[{name:"karthik"}]}

app.get("/",(req,res)=>{
    res.json(people);
    res.end();

})

app.post("/person",(req,res)=>{
    if(req.body && req.body.name){
        people.people.push({name:req.body.name});
    }
    res.json(people)
    res.end();
})

app.get("/person/:name",(req,res)=>{
    res.json({name:req.params.name})
    res.end();
})
app.listen(6000,function(){
    console.log("server is listening to the 6000 port");
})
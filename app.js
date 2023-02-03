var express=require("express");

var fs=require("fs");

var app=express();

app.get('/',function(req,res){
    res.send("<h1>Express Woking</h1>")
})

app.get('/tasks',function(req,res){
    fs.readFile('./db.json',function(err,data){
        var tasks=JSON.parse(data.toString()).tasks;
        res.json(tasks);
    })
})


app.listen(4000,function(){
    console.log("server is listening to the port 4000");
});
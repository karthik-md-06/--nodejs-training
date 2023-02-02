var fs=require("fs");

fs.readFile("text.txt",function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout(()=>{
        console.log(data.toString());
    },3000)
})

console.log("start here");
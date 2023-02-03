var http=require("http");

var events=require("events");

var eventEmitter=new events.EventEmitter();


var server=http.createServer(function(req,res){
    eventEmitter.emit('someone requested');//event trigger
    res.end("server created");
})

eventEmitter.on('someone requested',function(){
    console.log("A request is done on the server");//event listener
})

server.listen(3000,'localhost',function( ){
    console.log("server started at the port 3000");
})



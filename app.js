var express=require('express');

var  http=require('http');

//var json=require('json');


var nano=require('nano')('http://admin:admin@0.0.0.0:5984');

var db=nano.use('address');

var app=express();

app.set('port',process.env.PORT || 4000)

app.use(express.json());

app.post('/createdb',function(req,res){
    nano.db.create(req.body.dbname,function(err){
        if(err)
        {
            res.send("database not  created  :"+req.body.dbname);
        }
        res.send(" database created :"+req.body.dbname);
    })
})

http.createServer(app).listen(app.get('port'),function(){
    console.log("listening at the port :"+app.get('port'))
})
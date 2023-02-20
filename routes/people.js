const express=require('express');

const mysqlConnection=require('../server');

const route=express.Router();

route.get('/',(req,res)=>{
    mysqlConnection.query("SELECT * FROM PEOPLE",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})

module.exports=route;
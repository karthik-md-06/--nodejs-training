const mysql=require('mysql2');
const express=require('express');
const app=express();

app.use(express.json());


var mysqlConnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"kar@9972",
    database:"edureka",
    multipleStatements:true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Database connected sucessfully");
    }
    else{
        console.log("Connection Failed....!",err);
    }
})
module.exports=mysqlConnection;
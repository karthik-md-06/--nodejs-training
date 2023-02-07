const express=require("express");
const passport = require("passport");

const session=require("express-session")
require('./auth');

function isLogged(req,res,next){
    req.user ? next():res.send(401);
}

const app=express();

app.use(session({secret:'cats'}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res)=>{
    res.send('<a href="/auth/google ">Authentication with google</a>')
});

app.get("/auth/google",
passport.authenticate('google',{scope:['email','profile']}))

app.get("/google/callback",
passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failure'
}))

app.get('/auth/failure',(req,res)=>{
    res.send("Something went wrong...!");
})

app.get("/protected",isLogged,(req,res)=>{
    res.send(`Hello ${req.user.displayName}`);
})

app.get('/logout',(req,res)=>{
    req.logOut();
    req.session.destroy();
    res.send("Good bye..!")
})

app.listen(5000,()=>console.log("Listening to the 5000 port"));
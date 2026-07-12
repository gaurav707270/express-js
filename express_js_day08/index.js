import express from "express";
const app = express();

app.get("",(req,res) =>{
    res.send("this is home page")
})

app.get("/login",(req,res) =>{
    res.send("this is login page")
})

app.get("/user",(req,res) =>{
    res.send("this is user page")
})

app.get("/products",(req,res) =>{
    res.send("this is products page")
})

app.listen(3000)
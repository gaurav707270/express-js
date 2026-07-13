import express from "express";
import path from "path";
const app = express();

const absPath = path.resolve("form.html")

app.get("",(req,res) =>{
    res.send("this is home page")
})

app.get("/login",(req,res) =>{
    res.sendFile(absPath)
})

app.get("/submite",(req,res) =>{
    res.send("this is submite page")
})


app.get("/user",(req,res) =>{
    res.send("this is user page")
})



app.listen(3000)
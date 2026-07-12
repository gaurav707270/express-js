import express from "express";
import path from "path"

const app = express();

const absPath = path.resolve("pages")

app.get("/", (req, res) => {
    
    res.sendFile(absPath + "/home.html")
    console.log(absPath)
})

app.get("/login",(req,res) =>{


    res.sendFile(absPath + "/login.html")
})

app.get("/about",(req,res) =>{
    res.sendFile(absPath + "/about.html")
})

app.use((req,res) =>{
    res.status(404).sendFile(absPath + "/404.Html")

})

app.listen(3000)
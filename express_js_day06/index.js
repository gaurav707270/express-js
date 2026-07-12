import express from "express";
import path from "path"

const app = express();

app.get("/", (req, res) => {
    const absHomePath = path.resolve("pages/home.html")
    res.sendFile(absHomePath)
    console.log(absHomePath)
})

app.get("/login",(req,res) =>{

    const absLoginPath = path.resolve("pages/login.html")

    res.sendFile(absLoginPath)
})

app.get("/about",(req,res) =>{
    const absAboutPath = path.resolve("pages/about.html");
    res.sendFile(absAboutPath)
})

app.listen(3000)
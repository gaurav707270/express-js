import express from "express";

const app = express();

const checkAge = (req,res,next) =>{
if (!req.query.age || req.query.age<18){
    res.send("you cant access this is page")
}
else{
    next()
}
}

app.use(checkAge)

app.get("/", (req, res) => {
    res.send("this is home page")
})

app.get("/login",(req,res) =>{
    res.send("this is login page ")
})

app.get("/admin",(req,res) =>{
    res.send("this is admin page")
})

app.listen(3000)
const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.send("<h1> this is home page base node js and express js example<h1/>")
})

app.get("/about", (req, res) => {
    res.send("<h1> this is about page<h1/>")
})

app.get("/contact", (req, res) => {
    res.send("this is contact page")
})



app.listen(3200)

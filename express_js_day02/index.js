// const express = require("express");

import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("this is home pAGE")
})

app.get("/about", (req, res) => {
    res.send("this is about page")
})



app.listen(3300)
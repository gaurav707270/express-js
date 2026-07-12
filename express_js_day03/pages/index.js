import express from "express";
import home from "./home.js";

const app = express();

app.get("/", (req, res) => {
    res.send(home())
})

app.listen(4000, () => {
    console.log("helloooo")
})
import express from "express";
import { home } from "./home.js";

const app = express();

app.get("/", (req, res) => {
    res.send(home());
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const url = "mongodb://localhost:27017";
const dbName = "userList";

const client = new MongoClient(url);

const dbConnection = async () => {
    try {
        await client.connect();
        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
};

dbConnection();

app.get("/", async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection("user");

    const userList = await collection.find().toArray();

    console.log(userList)

    res.render("index", { userList
    });
});

app.listen(3500, () => {
    console.log("Server running at http://localhost:3500");
});
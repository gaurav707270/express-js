import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const url = "mongodb://localhost:27017";
const dbName = "testdb";

const client = new MongoClient(url);

app.set("view engine", "ejs");

// Connect Database Once
async function dbConnection() {
    try {
        await client.connect();
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
    }
}

dbConnection();

app.get("/api", async (req, res) => {

    const db = client.db(dbName);
    const collection = db.collection("post");

    const result = await collection.find().toArray();

    console.log(typeof (result));

    res.render("post", {
        posts: result
    });


});

app.listen(3200, () => {
    console.log("Server running at http://localhost:3200");
});
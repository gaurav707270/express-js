import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1> home  page</h1>")
})

app.get("/login", (req, res) => {
    res.send(`
        <form action="/signup" method="post">
        <h1> Lodin Form</h1>
        <input type="email" placeholder="enter the email" />
        <input type="password" placeholder="enter the password" />
        <button>Login</button>
        </form>`)

})

app.post("/signup", (req, res) => {
    res.send(`<button>submite </button>`)

})

app.listen(3500)
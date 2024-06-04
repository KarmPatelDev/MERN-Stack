const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("This is a Main Page");
});

app.get("/about", (req, res) => {
    res.send("This is a About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is a Contact Page");
});

app.get("/temp", (req, res) => {
    res.send("This is a Temperature Page");
});

app.listen(PORT, () => {
    console.log(`Listening a port ${PORT}`);
});
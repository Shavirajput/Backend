const express = require("express");
require("dotenv").config();
const app = express();

app.get("/app", (req, res) => {
    res.send("Hello, I am Shavi");
});

app.get("/", (req, res) => {
    res.send(`Who is Hagimaru: ${process.env.WHO_HAGIMARU}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (_req, res) => {
  res.send(`<h1>I am from NodeJS</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port at ${port}`);
});

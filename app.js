const express = require("express");

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello ExpressJS");
});

app.listen(port, () => {
  console.log("Server is running...");
});

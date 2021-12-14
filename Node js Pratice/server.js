const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>My name is Itish Prasad sahoo</h1>");
});

app.listen(8080, () => {
  console.log("Server stated at Port 8080");
});

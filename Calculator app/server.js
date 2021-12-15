const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  result = num1 + num2;
  res.send(`<h1>Result : ${result}</h1>`);
});

app.post("/bmi-cal", (req, res) => {
  let weight = Number(req.body.w1);
  let height = Number(req.body.h1);
  result = weight / (height * height);
  res.send(`Bmi cal : ${result}`);
});

app.listen(8080);

const express = require("express");
const https = require("https");
const app = express();

app.get("/", async (req, res) => {
  const url = `api.openweathermap.org/data/2.5/weather?q=Cuttack&appid=b0cdc8503ee74db41a7dc766bfd0aae1&units=metric`;

  https.get(url, (res) => {
    console.log(res);
  });

  res.send("Helloo this site is running");
});

app.listen(8080, () => {
  console.log("server stated at 8080 ");
});

const express = require("express");
const path = require("path");
const moment = require("moment");

const app = express();

//set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/member"));

//initialzing middlewire
const logger = (req, res, next) => {
  console.log("SOME Change made");
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } :: access at : ${moment().format("MMMM Do YYYY, h:mm:ss a")}`
  );
  next();
};

app.use(logger);

// This is basic res from  /
// app.get("/", (req, res) => {
// //   res.send("<h1>This my Website </h1>");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Stated at ${PORT}`);
});

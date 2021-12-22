const fs = require("fs");
const path = require("path");

// Make a Folder
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) throw err;
//   console.log("Folder is created...");
// });

// make a file and write in this

fs.writeFile(
  path.join(__dirname, "/test", "demo.txt"),
  "HEllo node js",
  (err) => {
    if (err) throw err;
    console.log("File is created ...");
    //callback for appending a new text in this same file
    fs.appendFile(
      path.join(__dirname, "/test", "demo.txt"),
      " I love js",
      (err) => {
        if (err) throw err;
        console.log("File is apended ...");
      }
    );
  }
);

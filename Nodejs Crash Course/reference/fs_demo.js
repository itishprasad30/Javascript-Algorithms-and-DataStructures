const fs = require("fs");
const path = require("path");

// Make a Folder
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) throw err;
//   console.log("Folder is created...");
// });

// make a file and write in this

// fs.writeFile(
//   path.join(__dirname, "/test", "demo.txt"),
//   "HEllo node js",
//   (err) => {
//     if (err) throw err;
//     console.log("File is created ...");
//     //callback for appending a new text in this same file
//     fs.appendFile(
//       path.join(__dirname, "/test", "demo.txt"),
//       " I love js",
//       (err) => {
//         if (err) throw err;
//         console.log("File is apended ...");
//       }
//     );
//   }
// );

// reading the file
// fs.readFile(path.join(__dirname, "/test", "demo.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// rename the file from existing file

fs.rename(
  path.join(__dirname, "/text", "demo.txt"),
  path.join(__dirname, "/text", "demo1.txt"),
  (err) => {
    if (err) throw err;
    console.log("THe file is renamed");
  }
);

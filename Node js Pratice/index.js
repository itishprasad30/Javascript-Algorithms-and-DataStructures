const fs = require("fs");

fs.copyFileSync("file1.txt", "file2.txt"); // this will copy the existing file to a new one

const names = require("marvel-comics-characters");
const superhero = names.all.filter((t) => t == "Spider-Man");
console.log(superhero);

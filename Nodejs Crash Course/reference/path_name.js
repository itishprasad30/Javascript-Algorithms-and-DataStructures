const path = require("path");

//dir name
console.log(path.dirname(__filename));

// file name
console.log(path.basename(__filename));

// extension name of file
console.log(path.extname(__filename));

// parse it will return object of basic file name

console.log(path.parse(__filename));

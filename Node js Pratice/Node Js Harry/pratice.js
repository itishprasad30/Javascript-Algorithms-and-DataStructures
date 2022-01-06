// os build in files
/*
const os = require("os");

console.log(os.hostname());

console.log(os.freemem());
console.log(os.platform());
console.log(os.release());
console.log(os.version());

*/

// Path build in files

const path = require("path");

const dirName = path.dirname(__filename);
console.log(dirName);

const fileName = path.basename(__filename);
console.log(fileName);

const ext = path.extname(__filename);
console.log(ext);

const simple = path.parse(__filename);

console.log(simple);

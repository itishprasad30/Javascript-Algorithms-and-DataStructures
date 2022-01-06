const fs = require("fs");

// Node js is non -blocking io system

fs.writeFile("demo.txt", "Dawn is Comming 😳☀️", () => {
  console.log("THe data has been written"); // then 2. callback will run
});

console.log("Finished Written data"); // runs 1. first

// if you want manually block
/*
const b = fs.writeFileSync("demo1.txt", "On Jan 7th");

console.log(b);// this will run 1st and log out
console.log("Finished Written data");// this will runs 2nd


*/

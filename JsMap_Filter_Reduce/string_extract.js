// string manupulation

// 1. slice

const str = "itish prasad sahoo";

// let newStr = str.length // 18

let newStr = str.slice(0, 5); // start index and end index not include prev one

console.log(newStr);

// 2. substring -- exact same but -ve index  not include

let substr = str.substring(0, 5);

console.log(substr);

// 3.substr is same as slice but it last inext is that what number to extraced

let substr3 = str.substr(6, 3);
console.log(substr3);

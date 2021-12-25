// Input: s = ["h", "e", "l", "l", "o"];

// Output: ["o", "l", "l", "e", "h"];

// Input: s = ["H", "a", "n", "n", "a", "h"];

// Output: ["h", "a", "n", "n", "a", "H"];

//2 ways to solve

const reverseStr = (str) => {
  return str.reverse();
};

const res = reverseStr(["h", "e", "l"]);
console.log(res);

// or
var reverseString = function (s) {
  let newStr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    newStr += s[i];
  }
  return newStr;
};

////// other ways only string
const reverse21 = (str) => {
  let strnew = str.toLowerCase();
  let reverseStr = "";
  for (let i = strnew.length - 1; i >= 0; i--) {
    reverseStr += strnew[i];
  }
  return reverseStr;
};

const reverse = (str) => {
  return str.split("").reverse().join("").toLowerCase();
};
console.log(reverse21("Pintu"));

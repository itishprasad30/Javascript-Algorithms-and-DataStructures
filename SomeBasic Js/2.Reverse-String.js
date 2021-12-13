const str = "Javascipt is Wired !";

// E6 funtion used
const reverseStr = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(reverseStr(str));

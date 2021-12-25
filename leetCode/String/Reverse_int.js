// Reverse Int

// input : 123
// output : 321

// intput: -124
//output: -421
// input: 1200
// output: 21

const revInt = (num) => {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
};

console.log(revInt(-1223000));

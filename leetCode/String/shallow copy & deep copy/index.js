const _ = require("lodash");

let developer1 = {
  name: "Itish Prasad",

  skills: {
    primary: "Javascript",
    secondary: "Full stack devloper",
  },

  calculateNum: function () {
    return 19 + 33;
  },
  joiningDate: new Date(),
};

// let developer2 = developer1;

// in this case shallow copy is generated
// if you changed some thing in the child and it will reflect in the parent then it is called shallow copy

// to avoid the shallow copy
// 1. using object assign
// let developer2 = Object.assign({}, developer1);

// es 6 spread oparator
// let developer2 = { ...developer1 };

// let developer2 = JSON.parse(JSON.stringify(developer1)); // there is catch it totaly miss the function and types

// fixed by lodash library
let developer2 = _.cloneDeep(developer1);
developer2.name = "Taylor Swift";
developer2.skills.primary = "Block Chain ";

console.log(developer1);

// console.log(developer2.calculateNum());

const array_of_Number = [12, 43, 21];

array_of_Number.flatMap((a) => console.log(a));

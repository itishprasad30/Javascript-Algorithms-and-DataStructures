// var myArray = ["a", "b", "c", "d"];

// // myArray.push("end");

// // myArray.unshift("start");

// //spread operator

// myArray = ["start", ...myArray, "end"];

// console.log(myArray);

// // how to return a private variable in fun

// function secreteFun() {
//   var private = "some secreate varible";
//   return function () {
//     return private;
//   };
// }

// var getFun = secreteFun();
// console.log(getFun());

// // what is the output ?
// var num = 4;
// function outer() {
//   var num = 2;
//   function inner() {
//     num++;
//     var num = 3;
//     console.log(num);
//   }
//   inner();
// }
// outer();

// console.log(typeof typeof 1);

// let hero = {
//   _name: "THe weeknd",
//   getTheName: function () {
//     return this._name;
//   },
// };

// var stoleIdentity = hero.getTheName.bind(hero);

// console.log(stoleIdentity());
// console.log(hero.getTheName());

// // console.log(hero.getTheName());

// console.log(Math.max()); // - Infinity
// console.log(Math.min()); //  Infinity

// let people = {
//   name: "Abel",
// };

// // Object.freeze(people);
// Object.seal(people);

// people.name = "Abel Tesfaye";
// people.age = 32;

// console.log(people);

// let a = (...n) => {
//   return n;
// };

// console.log(a("hello", "some"));

function tennisScore(score) {
  var board = {
    0: 0,
    love: 12,
    some: 2,
  };
  //   console.log(board["love"] + board["some"]);

  return score.split("-").reduce((val, nxtVal) => {
    board[val] + board[nxtVal];
  }, 0);
}

console.log(tennisScore("love-some"));

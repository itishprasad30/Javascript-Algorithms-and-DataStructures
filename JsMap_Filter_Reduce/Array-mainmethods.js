let numbers = [1, 2, 3, 4, 5];

//Map -Creates a new array by doing someting with each item in an array

const mapingItem = numbers.map((num) => {
  return num;
});

console.log(mapingItem); //returns:➡️ [1,2,3,4,5]

// Filter -Creates a new array by keeping the items that return true

var rates = [10, 20, 30, 40, 50];
const filterItems = rates.filter((num) => {
  return num >= 40;
});

console.log(filterItems); //returns:➡️ [40,50]

// Reduce --Accumulate a value by doing something to each item in an array
var price = [30, 40, 20, 10];

const reducedItem = price.reduce((prev, curr) => {
  return prev + curr;
}, 0);
//last this is the initial value

console.log(reducedItem); // result:➡️ 100

//Find -find the first item that matches from an array
const findingEl = [21, 23, 32, 35, 43];
const findElement = findingEl.find((num) => {
  return num > 35;
});

console.log(findElement); // 43

// Every- it will match every item in array if condition matched and retrun ture or false

const everCon = [12, 23, 354, 456, 56, -1, -42];

const everyFun = everCon.every((value) => {
  return value < 0;
});

console.log(everyFun); // false

// Some - its exact opposite of every that it will return true if some of the condition is matched with arr,other wise it will return false

const someEle = [12, 23, 354, 456, 56, -1, -42];

const somefun = someEle.some((val) => {
  return val > 0;
});

console.log(somefun); // true :that means some ele are match the condition

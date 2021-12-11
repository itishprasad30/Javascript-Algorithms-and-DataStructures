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

const names = ["max", "able", "taylor", "justin"];

// console.log(names[1]);
console.log(names.length); //4

for (let i of names) console.log(i);

names.push("zayn");
console.log(names.length);

// find and findIndex will go though all array

const findRes = names.findIndex((val) => val === "taylor");
console.log(findRes);
console.log(names);
//delete splice allows to modify the array
console.log(names.splice(0, 1));
console.log(names);

// sets
const ids = new Set();

ids.add("abc");
ids.add(1);
ids.add("dfc");
ids.add(1);

for (let el of ids) {
  console.log(el);
}
console.log(ids.has("abc"));
console.log(ids);
console.log(names);

// Maps

const resMap = new Map();
resMap.set("avg", 1.53);
resMap.set("lastres", null);

const country = { name: "France", population: 12 };

resMap.set(country, 0.99);

for (let i of resMap) {
  console.log(i);
}

console.log(resMap);
console.log(resMap.delete(country));
console.log(resMap);

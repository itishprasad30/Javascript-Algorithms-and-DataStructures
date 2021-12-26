class House {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getFun() {
    return "This will always print";
  }
}

const john = new House("jhon", 12);
const taylor = new House("taylor", 21);

console.log(john.name);
console.log(john.age);
console.log(john.getFun());
console.log(taylor.name);
console.log(taylor.age);

console.log(taylor.getFun());

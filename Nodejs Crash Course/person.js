// const person = {
//   name: "The weeknd",
//   age: 32,
//   profession: "Singer",
// };

class Person {
  constructor(name, profession) {
    (this.name = name), (this.profession = profession);
  }

  rendering() {
    console.log(`${this.name} is a ${this.profession}`);
  }
}

module.exports = Person;

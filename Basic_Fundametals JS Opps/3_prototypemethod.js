// Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in ${this.year}`;
  //   };
}

// by prototype
//getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
// getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} old`;
};

// intatialte an object
const book1 = new Book("book one ", "taylor", 2000);
const book2 = new Book("book two", "the weeknd", 2012);

console.log(book1.getSummary());
console.log(book2);

console.log(book2.getAge());

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, author, title, year);
  this.month = month;
}
// inherite the mag to book
Magazine.prototype = Object.create(Book.prototype);
// Instatiate the magazine obj
const mag = new Magazine("times of India", "John", 2019, "jan");
console.log(mag);
console.log(mag.getSummary());

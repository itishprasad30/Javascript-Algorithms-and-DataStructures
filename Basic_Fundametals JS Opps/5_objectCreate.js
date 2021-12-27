const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  },
};

// create an object

const book1 = Object.create(bookProtos);
book1.title = "Book one";
book1.author = "the weeknd";
book1.year = 2020;

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

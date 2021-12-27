class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  }
}

const book1 = new Book("book one", "taylor", 2020);
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

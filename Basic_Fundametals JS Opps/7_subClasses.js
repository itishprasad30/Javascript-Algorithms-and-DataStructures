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

// subclasses
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// instatiate mag
const mag = new Magazine("times of india", "taylor swift", 2017, "dec");
console.log(mag.getSummary());
console.log(mag.getAge());

// string
// const s1 = "heloo";
// console.log(s1);
// console.log(typeof s1);
// // object
// const s2 = new String("hello12");
// console.log(s2);
// console.log(typeof s2);
//console.log(window);

// String literal
// const album = {
//   name: "StarBoy",
//   singer: "The weeknd",
//   publish: 2016,
//   getDetails: function () {
//     return `${this.name}  is relesed in ${this.publish} by ${this.singer}`;
//   },
// };
// console.log(Object.values(album)); //['StarBoy', 'The weeknd', 2016]
// console.log(Object.keys(album)); //['name','singer','publish']

// console.log(album.name);
// console.log(album.getDetails());

// by Class and constructor

class Album {
  constructor(name, author, publish) {
    this.name = name;
    this.author = author;
    this.publish = publish;
  }

  getDetails() {
    return `${this.name} is relesed in ${this.publish} by ${this.author}`;
  }
}

const alb_1 = new Album("After Hours", "The Weeknd", 2020);
console.log(alb_1.getDetails());

const alb_2 = new Album("Dawn", "The weeknd", 2022);
console.log(alb_2.getDetails());

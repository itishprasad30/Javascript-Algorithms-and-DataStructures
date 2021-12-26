// string
const s1 = "heloo";
console.log(s1);
console.log(typeof s1);
// object
const s2 = new String("hello12");
console.log(s2);
console.log(typeof s2);
//console.log(window);

// String literal
const album = {
  name: "StarBoy",
  singer: "The weeknd",
  publish: 2016,
  getDetails: function () {
    return `${this.name}  is relesed in ${this.publish} by ${this.singer}`;
  },
};
console.log(Object.values(album)); //['StarBoy', 'The weeknd', 2016]
console.log(Object.keys(album)); //['name','singer','publish']

console.log(album.name);
console.log(album.getDetails());

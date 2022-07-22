// localStorage is 10mb size and only store in the browser

window.localStorage.setItem("name", "Hailee Stenfield");

localStorage.setItem("genre", "pop");

console.log(localStorage); // here name haile and genre is pop

console.log(localStorage.getItem("name")); // hailee will print here

localStorage.setItem("name", "the weeknd"); // override the concept here

console.log(localStorage.getItem("name")); // now returns name: the weeknd

localStorage.removeItem("genre"); // remove the item here

console.log(localStorage.getItem("genre")); // null

////// session storage goes here
// size of session storeage is 5mb , utill you close the tab , it will disaper

sessionStorage.setItem("song", "beautiful mistake");
console.log(sessionStorage);
sessionStorage.setItem("song", "cry my gucci");

const songName = sessionStorage.getItem("song");

console.log(songName);

// cookies is 4kb only , but it tranfer the data server and client

document.cookie =
  "name=pintu sahoo;expires=" + new Date(2022, 7, 23).toUTCString();

document.cookie = "age=22;expires=" + new Date(2023, 3, 11).toUTCString();

let date = new Date(2022, 2, 12).toUTCString();
console.log(date);
let date1 = new Date().toLocaleString();
console.log(date1);

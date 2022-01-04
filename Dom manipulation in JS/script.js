// const body = document.body;
// //apppend will print strings
// // body.append("hello world", "bye");
// // it will append elemnt like div,span etc
// // body.appendChild("hello world");

// // it create by  not added
// const div = document.createElement("div");

// // div.textContent = "hello woeld";
// // div.innerHTML = "<strong> HEllo bold </strong>";

// // or
// const strong = document.createElement("strong");
// strong.innerText = "Hello bold";
// div.append(strong);

// // it will display in body tag

// body.append(div);

const body = document.body;
const div = document.querySelector("div");
const h2 = document.querySelector("h2");
const spanhi = document.querySelector("#hello");
const spanbuy = document.querySelector("#buy");

// spanbuy.remove();
// div.removeChild(spanhi);
// div.appendChild(spanhi);
// div.append(spanbuy);

// both are same to getting the attribute
console.log(spanhi.getAttribute("title"));
console.log((spanhi.title = "something"));

//setAttribute
//removeAttribute

console.log(spanbuy.dataset);
spanbuy.dataset.someNewThing = "sdfsdfsdf";

// classList
h2.classList.add("head");

// addeding the style to the class
h2.style.backgroundColor = "red";

spanbuy.style.backgroundColor = "red";

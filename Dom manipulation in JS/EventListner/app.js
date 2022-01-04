const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click", (e) => {
  console.log("GrandParent 1");
  e.stopPropagation();
});

parent.addEventListener("click", (e) => {
  console.log("Parent 1");
});

child.addEventListener("click", () => {
  console.log("Child 1");
});

document.addEventListener("click", () => {
  console.log("document 1");
});

const divs = document.querySelectorAll("div");

function clickEvent(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}
clickEvent("click", "div", (e) => {
  console.log("hi");
});

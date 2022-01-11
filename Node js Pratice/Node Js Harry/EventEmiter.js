const MyEmitter = require("events");

const myEmitter = new MyEmitter();
myEmitter.on("waterfull", () => {
  console.log("Gentle Reminder for warning");
  setTimeout(() => {
    console.log("please turn off the motar");
  }, 3000);
});

console.log("The script is running");
myEmitter.emit("waterfull");

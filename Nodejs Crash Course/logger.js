const EventEmmiter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());

class Logger extends EventEmmiter {
  log(msg) {
    // call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

// const Person = require("./person");

// console.log("Hello this is Home page");

// const person1 = new Person("the Weeknd", "signer");
// person1.rendering();

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener", data));

logger.log("pintu");
logger.log("the weeknd");

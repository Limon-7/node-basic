const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// // add event listener
eventEmitter.on("message", (arg) => console.log("message event called", arg));

// raise an event
eventEmitter.emit("message", { id: 1, name: "limon" });
const EventModule = require("./eventModule");
const event1 = new EventModule();

// add event listener
event1.on("message", (arg) => {
  console.log("listener called with argument:", arg);
});
// add event listener
event1.on("message1", () => {
  console.log("listener called without argumentcls");
});
event1.log("message");

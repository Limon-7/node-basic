const EventModule = require("./eventModule");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// // add event listener
function f1(arg) {
  console.log("from:", arg);
}
function f2() {
  console.log("I am from function-2");
}
function funcAddListener() {
  console.log("I am from addEventLister()");
}
function eventOnDemo() {
  eventEmitter.on("message", f1);
  eventEmitter.on("message", f2);
  eventEmitter.emit("message", { name: "limon", id: 1 });
  eventEmitter.off("message", f2);
}
function eventAddListernDemo() {
  eventEmitter.addListener("message", f1);
  eventEmitter.addListener("message", f2);
  eventEmitter.emit("message", { name: "addeventListener(argument):", id: 2 });
  // eventEmitter.removeListener("message", f1);
}
function eventListerMethod() {
  console.log(eventEmitter.listenerCount("message"));
  console.log(eventEmitter.listeners("message"));
}
eventOnDemo();
eventAddListernDemo();
eventListerMethod();

// const event1 = new EventModule();

// // add event listener
// event1.on("message", (arg) => {
//   console.log("listener called with argument:", arg);
// });
// // add event listener
// event1.on("message1", () => {
//   console.log("listener called without argumentcls");
// });
// event1.log("message");

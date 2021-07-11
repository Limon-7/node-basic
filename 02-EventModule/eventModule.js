const EventEmitter = require("events");
const http = "https://localhost:3000";
module.exports = class EventModule extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("message", { id: 1, http: http });
    this.emit("message1");
  }
};

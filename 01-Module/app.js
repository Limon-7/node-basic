const mod = require("./hello");
const module1 = require("./module1");
// const print = require("./module1/module1");
function sayHello(mod) {
  console.log("app-module:" + mod);
}
// sayHello("limon");
// mod.Name("limon");
// console.log("outside module>>", mod.Pi);
// const new1 = new module1.limon(14203165, "limon");
// new1.display();
module1.print();
console.log(module);

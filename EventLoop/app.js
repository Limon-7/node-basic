console.log("event loop started");
function one() {
  setTimeout(() => {
    console.log("I am function 1");
  }, 2000);
}
function two() {
  setTimeout(() => {
    console.log("I am function two");
  }, 1500);
}
function three() {
  setTimeout(() => {
    console.log("I am function three");
  }, 2000);
}
setTimeout(() => {
  console.log("function timeout 0");
}, 0);
console.log("event loop extended");
one();
two();
three();

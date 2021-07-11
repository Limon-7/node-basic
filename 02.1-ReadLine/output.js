console.log("My %s has %d years", "cat", 2);
// console.log("%o", Number);
console.log("limon %i", "142cse");
const oranges = ["orange", "orange"];
const apples = ["just one apple"];
oranges.forEach((fruit, index, array) => {
  console.log(index, fruit);
  console.count();
});
apples.forEach((fruit) => {
  console.count(fruit);
});
// calculate the spend

const doSomething = () => console.log("test");
const measureDoingSomething = () => {
  console.time();
  //do something, and measure the time it takes
  doSomething();
  console.timeEnd();
};
measureDoingSomething();

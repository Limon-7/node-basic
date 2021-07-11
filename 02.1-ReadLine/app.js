const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;
rl.question(`What is ${num1} + ${num2}?\n`, (userInput) => {
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    // The rl.setPrompt() method sets the prompt that will be written to output whenever rl.prompt() is called.
    rl.setPrompt(`Your answer of ${userInput} is incorrect\n`);
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput == answer) {
        rl.close();
      } else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect\n`);
        rl.prompt();
      }
    });
  }
});
// set an event listener
rl.on("close", () => {
  console.log("Correct!!!");
});

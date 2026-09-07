// calculator.js
// A simple CLI calculator using process.argv
// Example: node calculator.js add 10 5

// process.argv[0] = node path
// process.argv[1] = file path
// process.argv[2] = operation (add, sub, mul, div)
// process.argv[3] and process.argv[4] = the two numbers

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

let result;

// checking if the numbers given are actually valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numbers.");
} else {
  if (operation === "add") {
    result = num1 + num2;
    console.log("Result:", result);
  } else if (operation === "sub") {
    result = num1 - num2;
    console.log("Result:", result);
  } else if (operation === "mul") {
    result = num1 * num2;
    console.log("Result:", result);
  } else if (operation === "div") {
    // handling divide by zero case
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero");
    } else {
      result = num1 / num2;
      console.log("Result:", result);
    }
  } else {
    // if user types some other operation which we dont support
    console.log("Invalid operation. Please use: add, sub, mul, div");
  }
}

// isEven.js
// This is a custom module I made to check if a number is even or odd.
// I am exporting this function so I can use it in other files using require()

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// exporting the function so other files can use it
module.exports = isEven;

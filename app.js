// app.js
// This file shows how I am reusing my custom modules (isEven and logger)
// Run this using: node app.js

const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("app.js started running");

// testing the isEven module with a few numbers
const numbersToCheck = [4, 7, 10, 15, 22];

numbersToCheck.forEach((num) => {
  if (isEven(num)) {
    log(num + " is Even");
  } else {
    log(num + " is Odd");
  }
});

log("app.js finished running");

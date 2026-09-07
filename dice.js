// dice.js
// Random dice generator using the crypto module
// Run using: node dice.js

const crypto = require("crypto");
const log = require("./modules/logger");

// this function gives a random number between 1 and 6 (like a real dice)
function rollDice() {
  return crypto.randomInt(1, 7); // randomInt(min, max) -> max is not included, thats why 7
}

// rolling the dice 5 times to simulate multiple rolls
log("Rolling dice 5 times...");

for (let i = 1; i <= 5; i++) {
  const value = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${value}`);
}

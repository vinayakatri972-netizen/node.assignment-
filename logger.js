// logger.js
// Custom module for logging messages to the terminal.
// I made this so I don't have to write console.log again and again in every file.

function log(message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[LOG - ${time}] : ${message}`);
}

module.exports = log;

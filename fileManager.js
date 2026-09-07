// fileManager.js
// Doing CRUD (Create, Read, Update, Delete) operations on a file using the fs module
// Run using: node fileManager.js

const fs = require("fs");
const log = require("./modules/logger");

const fileName = "test.txt";

// STEP 1: Create the file
log("Creating File...");
fs.writeFile(fileName, "Hello Node.js", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }
  log("File Created");

  // STEP 2: Read the file (only after it is created)
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    log("Reading File");
    console.log(data);

    // STEP 3: Update the file (append some more content)
    fs.appendFile(fileName, "\nLearning FS Module", (err) => {
      if (err) {
        console.log("Error updating file:", err);
        return;
      }
      log("File Updated");

      // reading it again just to show the updated content
      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        console.log(data);

        // STEP 4: Delete the file
        fs.unlink(fileName, (err) => {
          if (err) {
            console.log("Error deleting file:", err);
            return;
          }
          log("File Deleted");
        });
      });
    });
  });
});

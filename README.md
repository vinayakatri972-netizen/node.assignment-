# Smart Utility Toolkit

This is my Lab Assignment 1 for Web Dev III (Node.js & Express Backend).
I made 5 small utilities using only Node.js core modules (process, http, fs, crypto).
No npm packages or express used, as per the assignment rules.

## Folder Structure
```
smart-utility-toolkit/
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── test.txt
├── modules/
│   ├── isEven.js
│   └── logger.js
└── README.md
```

## How to run each file

### 1. Calculator (process.argv)
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

### 2. Custom Modules (isEven + logger)
```
node app.js
```
This file requires the isEven module and logger module from the modules folder and uses them.

### 3. HTTP Server
```
node server.js
```
Then open browser and go to:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- any other route will show 404

### 4. File Manager (fs module)
```
node fileManager.js
```
This will create test.txt, read it, update it, read again, then delete it.
All steps are logged in the terminal.

### 5. Dice Generator (crypto module)
```
node dice.js
```
This rolls a dice 5 times and prints the values (1-6) using crypto.randomInt() for randomness.

## What I learned
- How process.argv works to take input from terminal
- How to make and reuse my own modules with module.exports and require()
- How http.createServer() works and how routing is done without express
- CRUD operations using fs module (writeFile, readFile, appendFile, unlink)
- How to generate secure random numbers using crypto.randomInt()

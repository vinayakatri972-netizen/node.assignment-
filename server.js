// server.js
// Basic HTTP server made using the built-in http module (no express used)
// Run using: node server.js
// Then visit http://localhost:3000/ in the browser

const http = require("http");
const log = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // logging every request that comes to the server
  log("Request received for route: " + req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node Server");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact Page");
  } else {
    // for any route that is not defined above
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Error - Page Not Found");
  }
});

server.listen(PORT, () => {
  log(`Server is running on http://localhost:${PORT}`);
});

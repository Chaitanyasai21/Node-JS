const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8081;

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/home") filePath = "home.html";
  else if (req.url === "/about") filePath = "about.html";
  else if (req.url === "/contact") filePath = "contact.html";
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  const fullPath = path.join(__dirname, "lib", filePath);
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading file");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 80;
const filePath = path.join(__dirname, "lib", "users.txt");

const server = http.createServer((req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading users.txt");
      return;
    }

    const lines = data.trim().split("\n");
    const headers = lines[0].split("|").map(h => h.trim());
    const rows = lines.slice(1).map(line => line.split("|").map(v => v.trim()));

    let html = "<table border='1' cellspacing='0' cellpadding='5'><tr>";
    headers.forEach(h => { html += `<th>${h}</th>`; });
    html += "</tr>";

    rows.forEach(row => {
      html += "<tr>";
      row.forEach(col => { html += `<td>${col}</td>`; });
      html += "</tr>";
    });
    html += "</table>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost`);
});

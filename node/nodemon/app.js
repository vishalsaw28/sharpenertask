const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(`
            Hello from Sharpener
            This page is the homepage
            This is   page 1.`);
  }
});

server.listen(3000, () => {
  console.log("Server is running");
});

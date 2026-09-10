const express = require("http");

const app = express();

http
  .createServer((req, res) => {
    res.end("Helo from the express server");
  })
  .listen(3000, () => {
    console.log(
      "Server is up and running on port 3000! Ready to handle requests.",
    );
  });

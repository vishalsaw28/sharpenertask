const express = require("http");

const app = express();
let port = 3000;

app.use((req, res, next) => {
  console.log("Authentication middleware installed");
  next();
});

app.use("/library-2", (req, res, next) => {
  console.log("Book Recommendations");
  next();
});

app.use("/library-3", (req, res, next) => {
  console.log("Special access to research paper from professors and seniors");
  next();
});

app.get("/library-2", (req, res) => {
  res.end("<h1>Library 2 ");
  next();
});

app.get("/library-3", (req, res) => {
  res.send("<h1>Library 3 Entered </h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

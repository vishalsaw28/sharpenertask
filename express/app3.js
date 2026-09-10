const express = require("http");

const app = express();
let port = 3000;

const addUser = (req, res, next) => {
  req.user = "Guest";
  next();
};

app.use(addUser);

app.get("/", (req, res) => {
  res.send(`Hello ${req.user}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

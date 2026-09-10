const express = require("http");

const app = express();
let port = 3000;

const addUser = (req, res, next) => {
  req.user = "Guest";
  next();
};

// app.use(addUser);

app.get("/welcome", addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

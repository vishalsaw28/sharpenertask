const express = require("express");
const app = express();

const customMiddleware = (req, res, next) => {
  ((req.user = "Guest"), next());
};

app.get("/welcome", customMiddleware, (req, res) => {
  res.send("`<h1>Welcome, ${req.user}!</h1>");
});

app.listen(5000, () => {
  console.log("Server is running ont eh port 5000.");
});

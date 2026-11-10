const express = require("/express");
const app = express();

app.use(express.josn());

app.get("/orders", (req, res) => {
  res.send("Here is the list of all the orders.");
});

app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
});

app.get("/users", (req, res) => {
  res.send("Here is the list of all the users.");
});

app.post("/users", (req, res) => {
  res.send("A new user has been created.");
});

app.listen(3000, (error) => {
  if (error) throw error;
  console.log("Server is running on the port 3000.");
});

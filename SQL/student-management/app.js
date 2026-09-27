const express = require("express");

const studentRoutes = require("./routes/studentRoutes");
const db = require("./utils/db-connection");
const studentModels = require("./models/students");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);

db.sync({ force: true }).then(() => {
  app.listen(3000, (err) => {
    console.log("Server is running ");
  });
});

app.get("/", (req, res) => {
  res.send("Student Management API is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const mysql = require("mysql2");
const db = require("./utils/db-connection");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());

app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

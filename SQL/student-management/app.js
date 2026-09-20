const express = require("express");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Student Management API is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

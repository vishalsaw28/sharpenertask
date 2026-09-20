const express = require("express");

const db = require("./utils/db-connection");

const studentRoutes = require("./routes/studentsRoutes");

const studentModel = require("./models/students");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/students", studentRoutes);

db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database sync failed:", err);
  });

const express = require("express");

const app = express();

const PORT = 4000;
const studentsRouter = require("./routes/students");
const courseRouter = require("./routes/courses");

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.use("/students", studentsRouter);


app.use("/courses", courseRouter);

app.get("*any", (req, res) => {
  res.send("404 not found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

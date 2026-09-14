const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  console.log("List all the students");

  res.json(students);
});

router.get("/:id", (req, res) => {
  const sid = Number(req.params.id);
  const student = students.find((student) => student.id === sid);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }
  res.json(student);
});

module.exports = router;

const express = require("express");

const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  console.log("List all the courses");
  res.json(courses);
});

router.get("/:id", (req, res) => {
  const cid = Number(req.params.id);

  const course = courses.find((course) => course.id === cid);

  if (!course) {
    return res.status(404).json({
      message: "Course is not found",
    });
  }

  res.json(course);
});

module.exports = router;

const express = require("express");

const courseController = require("../controller/courseController");

const router = express.Router();

router.post("/addCourse", courseController.addCourse);
router.get("/addStudentCourses", courseController.addStudentsTOCourses);

module.exports = router;

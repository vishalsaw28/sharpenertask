const express = require("express");

const studentController = require("../controller/studentController");

const router = express.Router();

router.post("/", studentController.addStudent);

router.get("/", studentController.getAllStudents);

router.get("/:id", studentController.getStudentById);

router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;

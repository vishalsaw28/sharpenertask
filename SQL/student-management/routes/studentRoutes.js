const express = require("express");

const studentController = require("../controller/studentController");

const router = express.Router();

router.post("/", studentController.addEntries);
router.put("/update/:id", studentController.updateEntry);

router.delete("/delete/:id", studentController.deleteEntry);
router.post(
  "/addingStudentWithCard",
  studentController.addingValuesToStudentAndIdentityTable,
);

module.exports = router;

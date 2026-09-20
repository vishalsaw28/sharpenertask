const express = require("express");

const studentController = require("../controller/studentController");

const router = express.Router();

router.post("/", studentController.addEntries);

router.put("/:id", studentController.updateUser);

router.delete("/:id", studentController.deleteUser);

module.exports = router;

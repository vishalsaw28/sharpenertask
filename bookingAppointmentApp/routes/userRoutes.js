const express = require("express");

const userController = require("../controller/userController");

const router = express.Router();

router.post("/", userController.addUser);
router.get("/", userController.getUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;

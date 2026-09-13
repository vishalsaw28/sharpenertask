const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User created");
});

router.post("/", (req, res) => {
  res.send("New user added.");
});

module.exports = router;

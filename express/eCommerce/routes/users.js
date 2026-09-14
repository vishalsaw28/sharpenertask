const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetching all users.");
});

router.post("/", (req, res) => {
  req.send("Adding a new user.");
});

router.get("/:id", (req, res) => {
  const uid = req.params.id;

  res.send(`Fetching user with ID:${uid}`);
});

module.exports = router;

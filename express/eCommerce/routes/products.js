const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetching all products.");
});

router.post("/", (req, res) => {
  res.send("Adding a new product.");
});

router.get("/:id", (req, res) => {
  const pid = req.params.id;

  res.send(`Fetching product with ID:${pid}`);
});

module.exports = router;

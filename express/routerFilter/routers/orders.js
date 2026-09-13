const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Order recieved");
});

router.post("/", (req, res) => {
  res.send("New Order recieved");
});

module.exports = router;

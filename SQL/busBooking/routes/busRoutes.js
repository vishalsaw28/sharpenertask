const express = require("express");

const busController = require("../controller/busController");

const router = express.Router();

router.post("/", busController.addBus);

router.get("/available/:seats", busController.getBus);

module.exports = router;

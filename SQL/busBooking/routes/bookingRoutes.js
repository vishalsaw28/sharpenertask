const express = require("express");
const {
  getBookingsByBus,
  getBookingsByUser,
} = require("../controller/bookingController");
const router = express.Router();

router.get("/buses/:id/bookings", getBookingsByBus);
router.get("/users/:id/bookings", getBookingsByUser);

module.exports = router;

const express = require("express");
const {
  addBook,
  getAllBooks,
  borrowBook,
} = require("../controllers/bookController");
const router = express.Router();

router.post("/", addBook);

router.get("/", getAllBooks);

router.post("/:bookId/borrow", borrowBook);

router.post("/borrow-records/:recordId/pay-fine", payFine);

module.exports = router;

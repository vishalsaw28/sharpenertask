const express = require("express");
const {
  addBook,
  getAllBooks,
  borrowBook,
  payFine,
  getBorrowedBooks,
  getReturnedBooks,
} = require("../controllers/bookController");
const router = express.Router();

router.post("/", addBook);

router.get("/", getAllBooks);

router.post("/:bookId/borrow", borrowBook);

router.post("/borrow-records/:recordId/pay-fine", payFine);

router.get("/borrowed", getBorrowedBooks);

router.get("/returned", getReturnedBooks);

module.exports = router;

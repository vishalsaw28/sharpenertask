const { Book, BorrowRecord } = require("../models");
const { Op, Model } = require("sequelize");

async function addBook(req, res) {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Book name is required." });
    }

    const newBook = await Book.create({
      name: name.trim(),
      status: "available",
    });

    return res.status(201).json(newBook);
  } catch (error) {
    console.log("Error creating book:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log("Error creating book: ", error);
    return res.status(500).json({ error: "internal server error." });
  }
};

const borrowBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book is not found." });
    }

    if (book.status !== "available") {
      return res
        .status(400)
        .json({ error: "Book is not available for borrowing." });
    }

    const borrowedAt = new Date();
    const dueAt = new Date(borrowedAt.getTime() + 3600000);

    const newRecord = await BorrowRecord.create({
      bookId,
      borrowedAt,
      dueAt,
      status: "borrowed",
    });

    await book.update({ status: "borrowed" });

    return res.status(201).json({
      message: "Book borrowed successfully.",
      borrowRecord: newRecord,
    });
  } catch (error) {
    console.log("Error fetching book: ", error);
    return res.status(500).json({ error: "internal server error." });
  }
};

const returnBook = async (req, res) => {
  try {
    const { recordId } = req.params;

    // Find the borrowing record and its associated book
    const record = await BorrowRecord.findByPk(recordId, {
      include: "book",
    });

    // Check whether the record exists
    if (!record) {
      return res.status(404).json({
        error: "Borrow record not found.",
      });
    }

    // Check whether the book is already returned
    if (record.status !== "borrowed") {
      return res.status(400).json({
        error: "This book has already been returned or is awaiting payment.",
      });
    }

    // Capture actual return time
    const returnedAt = new Date();

    // Calculate overdue time
    const overDueTime = returnedAt - record.dueAt;

    let finalAmount = 0;

    // Calculate fine: ₹10 per started overdue hour
    if (overDueTime > 0) {
      const overDueHours = Math.ceil(overDueTime / 3600000);

      finalAmount = overDueHours * 10;
    }

    // Prepare record update
    const recordUpdateData = {
      returnedAt,
      fineAmount: finalAmount,
    };

    if (finalAmount === 0) {
      // No fine: complete the return immediately
      recordUpdateData.status = "returned";
      recordUpdateData.paymentStatus = "not_required";

      if (record.book) {
        await record.book.update({
          status: "available",
        });
      }
    } else {
      // Fine exists: wait for payment
      recordUpdateData.status = "return_pending_payment";
      recordUpdateData.paymentStatus = "pending";
    }

    // Save changes
    await record.update(recordUpdateData);

    return res.status(200).json({
      message:
        finalAmount === 0
          ? "Book returned successfully with zero fine."
          : `Book return initiated. Fine of ₹${finalAmount} is pending payment.`,
      borrowRecord: record,
    });
  } catch (error) {
    console.error("Error returning book:", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
};

const payFine = async (req, res) => {
  try {
    const { recordId } = req.params;

    const record = await BorrowRecord.findByPk(recordId, {
      include: "book",
    });

    if (!record) {
      return res.status(404).json({
        error: "Borrow record not found.",
      });
    }

    if (record.paymentStatus !== "pending") {
      return res.status(400).josn({
        error: "No pending paymnent found for this record.",
      });
    }

    await record.update({
      paymentStatus: "paid",
      status: "returned",
    });

    if (record.book) {
      await record.book.update({
        status: "avaiable",
      });
    }

    return res.status(200).josn({
      message: "Fine paid successfully. Book returned. ",
      borrowRecord: record,
    });
  } catch (error) {
    console.error("Error processing fine payment: ", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
};

const getBorrowedBooks = async (req, res) => {
  try {
    const borrowedBooks = await BorrowRecord.findAll({
      where: {
        status: {
          [Op.in]: ["borrowed", "return_pending_payment"],
        },
      },

      include: [
        {
          model: Book,
          as: "book",
        },
      ],

      order: [["createdAt", "Desc"]],
    });

    return res.status(200).josn({
      message: "Borrowed Book fetched successfully.",
      borrowedBooks,
    });
  } catch (error) {
    console.error("Error fetching borrowed books", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
};

const getReturnedBooks = async (req, res) => {
  try {
    const returnedBooks = await BorrowRecord.findAll({
      where: {
        status: "returned",
      },
      include: [
        {
          model: Book,
          as: "book",
        },
      ],
      order: [["returnedAt", DESC]],
    });

    return res.status(200).json({
      message: "Returned boooks fetched successfully.",
      returnedBooks,
    });
  } catch (error) {
    console.error("Error fetching returned books:", error);

    return res.status(500).json({
      error: "Internal servers error.",
    });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  borrowBook,
  returnBook,
  payFine,
  getBorrowedBooks,
  getReturnedBooks,
};

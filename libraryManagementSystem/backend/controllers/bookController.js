const Book = require("../models/Book");

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

module.exports = { addBook, getAllBooks };

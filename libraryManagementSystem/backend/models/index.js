const Book = require("./Book");
const BorrowRecord = require("./BorrowRecord");

Book.hasMany(BorrowRecord, {
  foreignKey: "bookId",
  as: "borrowRecords",
});

BorrowRecord.belongsTo(Book, {
  foreignKey: "bookId",
  as: "book",
});

module.exports = {
  Book,
  BorrowRecord,
};

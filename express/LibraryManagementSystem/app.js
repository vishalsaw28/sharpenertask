const express = require("express");

const app = express();

const PORT = 5000;

const booksrouter = require("./routes/book");

app.use("/books", booksrouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

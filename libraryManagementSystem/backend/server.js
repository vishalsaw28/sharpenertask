const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const bookRouter = require("./routes/bookRoutes");
const { Book, BorrowRecord } = require("./models");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/books", bookRouter);

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Library Management System API is running.");
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    await sequelize.sync();
    console.log("Database tables synchronized successfully!");
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server is running on the port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect database:", error);
  }
}
startServer();

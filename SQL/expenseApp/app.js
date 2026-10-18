const express = require("express");

const expenseRoutes = require("./routes/expenseRoutes");
const db = require("./utils/db-connection");

const app = express();

app.use(express.json());

app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});

db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });

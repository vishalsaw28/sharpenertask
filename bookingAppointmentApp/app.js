const express = require("express");
const Users = require("./models/Users");
const db = require("./utils/db-connection");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

app.use("/users", userRoute);

db.sync({ alter: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database error: ", err);
  });

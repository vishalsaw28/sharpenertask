const express = require("express");

const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const db = require("./utils/db-connection");
const Bookings = require("./models/Bookings");
const Buses = require("./models/Buses");
const Payments = require("./models/Payments");
const Users = require("./models/Users");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use("/buses", busRoutes);

app.get("/", (req, res) => {
  res.send("Bus Booking API is running");
});

db.sync({ alter: true })
  .then(() => {
    console.log("Databse Synced.");
    app.listen(3000, () => {
      console.log("server is running.");
    });
  })
  .catch((err) => {
    console.log(`Database sync failed: ${err}`);
  });

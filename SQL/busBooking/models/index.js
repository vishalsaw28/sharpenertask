const users = require("./Users");
const buses = require("./Buses");
const bookings = require("./Bookings");

// User - Booking: One-to-Many
users.hasMany(bookings, {
  foreignKey: "userId",
  as: "bookings",
});

bookings.belongsTo(users, {
  foreignKey: "userId",
  as: "user",
});

// Bus - Booking: One-to-Many
buses.hasMany(bookings, {
  foreignKey: "busId",
  as: "bookings",
});

bookings.belongsTo(buses, {
  foreignKey: "busId",
  as: "bus",
});

module.exports = { users, buses, bookings };

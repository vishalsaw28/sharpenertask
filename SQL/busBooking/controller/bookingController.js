const { users, buses, bookings } = require("../models");

const addSampleBookings = async (req, res) => {
  try {
    const user1 = await users.findByPk(1);
    const user2 = await users.findByPk(2);

    const bus1 = await buses.findByPk(1);
    const bus2 = await buses.findByPk(2);

    if (!user1 || !user2 || !bus1 || !bus2) {
      return res.status(404).json({
        message: "Please create users 1 and 2, and buses 1 and 2 first.",
      });
    }

    const sampleBookings = await bookings.bulkCreate([
      {
        userId: user1.id,
        busId: bus1.id,
        bookingDate: new Date(),
        seatNumber: "10",
        totalAmount: 500,
        status: "CONFIRMED",
      },
      {
        userId: user2.id,
        busId: bus1.id,
        bookingDate: new Date(),
        seatNumber: "11",
        totalAmount: 500,
        status: "CONFIRMED",
      },
      {
        userId: user1.id,
        busId: bus2.id,
        bookingDate: new Date(),
        seatNumber: "12",
        totalAmount: 600,
        status: "PENDING",
      },
    ]);

    return res.status(201).json({
      message: "Sample bookings created successfully.",
      bookings: sampleBookings,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating sample bookings.",
      error: error.message,
    });
  }
};

const getBookingsByBus = async (req, res) => {
  try {
    const busBookings = await bookings.findAll({
      where: { busId: req.params.id },
      include: [
        {
          model: users,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    return res.status(200).json(busBookings);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching bookings for this bus.",
      error: error.message,
    });
  }
};

const getBookingsByUser = async (req, res) => {
  try {
    const result = await bookings.findAll({
      where: { userId: req.params.id },
      include: [
        {
          model: buses,
          as: "bus",
          attributes: ["busNumber"],
        },
      ],
      attributes: ["id", "seatNumber"],
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching user bookings",
      error: error.message,
    });
  }
};

module.exports = {
  addSampleBookings,
  getBookingsByBus,
  getBookingsByUser,
};

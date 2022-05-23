const cors = require("cors");
const express = require("express");
const moment = require("moment");
const { generateSampleBookings } = require("./bookingService");

const dateFormat = "YYYY-MM-DD hh:00 a";

const current = moment().format(dateFormat);

let roomBookings = generateSampleBookings();
const isNumber = (value) => /^\d+$/.test(value);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/bookings", function (req, res, next) {
  res.json(roomBookings);
});

app.get("/bookings/:id", function (req, res, next) {
  if (!isNumber(req.params.id)) {
    return res.status(400).json({
      error: `Invalid bookingId ${req.params.id}`,
    });
  }

  const booking = roomBookings.find(
      (booking) => booking.id === parseInt(req.params.id)
  );

  if (!booking) {
    return res.status(404).json({
      error: `Booking not found with ID: ${req.params.id}`,
    });
  }
  res.status(200).json(booking);
});

app.post("/bookings", function (req, res, next) {
  const maxId = Math.max(...roomBookings.map((booking) => booking.id));

  const newBooking = {
    id: maxId + 1,
    hostName: req.body?.hostName,
    roomName: req.body?.roomName,
    guests: req.body?.guests,
    bookingTimeStart: req.body?.bookingTimeStart,
    duration: req.body?.duration,
    bookingDate: moment({ current, dateFormat }).toDate(),
  };

  roomBookings.push(newBooking);

  res.status(201).json(newBooking);
});

app.put("/bookings/:id", function (req, res, next) {
  const allowedFields = ["hostName", "guests", "bookingTimeStart", "duration"];
  const id = roomBookings.findIndex(
      (booking) => booking.id === parseInt(req.params.id)
  );

  allowedFields.forEach((field) => {
    roomBookings[id][field] =
        req.body[field] === undefined ? roomBookings[id][field] : req.body[field];
  });

  res.status(200).json(roomBookings[id]);
});

app.delete("/bookings/:id", function (req, res, next) {
  if (!isNumber(req.params.id)) {
    return res.status(400).json({
      error: `Invalid bookingId ${req.params.id}`,
    });
  }

  roomBookings = roomBookings.filter(
      (booking) => booking.id !== parseInt(req.params.id)
  );
  res.send();
});

app.listen(5000, () => {
  console.log("App listening on 5000.");
});
const moment = require("moment");

const dateFormat = "YYYY-MM-DD hh:00 a";

const current = moment().format(dateFormat);

let bookings = [
  {
    id: 1,
    roomName: "Room3",
    hostName: "Host 1",
    guests: ["Guest 1"],
    bookingDate: moment({ current, dateFormat }).subtract(1, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat }).add(7, "days").toDate(),
    duration: 1,
  },
  {
    id: 2,
    roomName: "Room1",
    hostName: "Host 2",
    guests: ["Guest 2"],
    bookingDate: moment({ current, dateFormat })
      .subtract(58, "minutes")
      .toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(30, "minutes")
      .toDate(),
    duration: 2,
  },
  {
    id: 3,
    roomName: "Room1",
    hostName: "Host 2",
    guests: ["Guest 2"],
    bookingDate: moment({ current, dateFormat }).subtract(1, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(5, "hours")
      .toDate(),
    duration: 2,
  },
  {
    id: 4,
    roomName: "Room3",
    hostName: "Host 4",
    guests: ["Guest 4"],
    bookingDate: moment({ current, dateFormat })
      .subtract(28, "minutes")
      .toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(7.5, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 5,
    roomName: "Room5",
    hostName: "Host 5",
    guests: ["Guest 5"],
    bookingDate: moment({ current, dateFormat }).subtract(2, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(3, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 6,
    roomName: "Room5",
    hostName: "Host 6",
    guests: ["Guest 6"],
    bookingDate: moment({ current, dateFormat }).subtract(1, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(4.5, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 7,
    roomName: "Room5",
    hostName: "Host 7",
    guests: ["Guest 7"],
    bookingDate: moment({ current, dateFormat })
      .subtract(53, "minutes")
      .toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(1, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 8,
    roomName: "Room5",
    hostName: "Host 8",
    guests: ["Guest 8"],
    bookingDate: moment({ current, dateFormat }).subtract(11, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(5, "days")
      .subtract(2.5, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 9,
    roomName: "Room3",
    hostName: "Host 9",
    guests: ["Guest 9"],
    bookingDate: moment({ current, dateFormat }).subtract(1, "days").toDate(),
    bookingTimeStart: moment({ current, dateFormat }).add(5, "days").toDate(),
    duration: 1,
  },
  {
    id: 10,
    roomName: "Room5",
    hostName: "Host 10",
    guests: ["Guest 10"],
    bookingDate: moment({ current, dateFormat }).subtract(15, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(3, "days")
      .subtract(3, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 11,
    roomName: "Room3",
    hostName: "Host 11",
    guests: ["Guest 11"],
    bookingDate: moment({ current, dateFormat })
      .subtract(20, "minutes")
      .toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(6, "days")
      .subtract(7.5, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 12,
    roomName: "Room2",
    hostName: "Host 12",
    guests: ["Guest 12"],
    bookingDate: moment({ current, dateFormat }).subtract(1, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(3, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 13,
    roomName: "Room4",
    hostName: "Host 13",
    guests: ["Guest 13"],
    bookingDate: moment({ current, dateFormat })
      .subtract(24, "minutes")
      .toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(7, "days")
      .subtract(3, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 14,
    roomName: "Room2",
    hostName: "Host 14",
    guests: ["Guest 14"],
    bookingDate: moment({ current, dateFormat }).subtract(1, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(6, "days")
      .subtract(3, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 15,
    roomName: "Room3",
    hostName: "Host 15",
    guests: ["Guest 15"],
    bookingDate: moment({ current, dateFormat }).subtract(21, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(2, "days")
      .subtract(2.5, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 16,
    roomName: "Room2",
    hostName: "Host 16",
    guests: ["Guest 16"],
    bookingDate: moment({ current, dateFormat }).subtract(13, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat }).add(4.5, "days").toDate(),
    duration: 1,
  },
  {
    id: 17,
    roomName: "Room5",
    hostName: "Host 17",
    guests: ["Guest 17"],
    bookingDate: moment({ current, dateFormat }).subtract(11, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat }).add(1, "days").toDate(),
    duration: 1,
  },
  {
    id: 18,
    roomName: "Room1",
    hostName: "Host 18",
    guests: ["Guest 18"],
    bookingDate: moment({ current, dateFormat })
      .subtract(13, "minutes")
      .toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(5, "days")
      .subtract(7, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 19,
    roomName: "Room3",
    hostName: "Host 19",
    guests: ["Guest 19"],
    bookingDate: moment({ current, dateFormat }).subtract(4, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(4, "days")
      .subtract(3, "hours")
      .toDate(),
    duration: 1,
  },
  {
    id: 20,
    roomName: "Room3",
    hostName: "Host 20",
    guests: ["Guest 20"],
    bookingDate: moment({ current, dateFormat }).subtract(6, "hours").toDate(),
    bookingTimeStart: moment({ current, dateFormat })
      .add(3, "days")
      .add(14, "hours")
      .toDate(),

    duration: 1,
  },
];

const generateSampleBookings = () => {
  return bookings;
};

module.exports = {
  generateSampleBookings,
};

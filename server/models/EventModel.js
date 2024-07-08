const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
//   allDay: Boolean,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
start: Date,
end: Date
});

const EventModel = mongoose.model("events", EventSchema);
module.exports = EventModel;

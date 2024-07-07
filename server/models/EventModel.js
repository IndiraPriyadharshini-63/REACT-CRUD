const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
      title: String,
      allDay: Boolean,
      createdAt: {
            type: String,
            default: Date.now
      }


});

const EventModel = mongoose.model("events", EventSchema);
module.exports = EventModel;
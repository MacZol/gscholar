const mongoose = require("mongoose");
const User = require("./User");

const alertSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: User,
  },
  scholar_id: String,
  alert_name: String,
  citations: Boolean,
  hIndex: {
    type: Boolean,
    default: false,
  },
  citationsPastWeek: {
    type: Boolean,
    default: false,
  },
  email: String,
  hIndexPastWeek: {
    type: Boolean,
    default: false,
  },
  schedule: String,
  sendMailAt: Date,
  updatedAt: Date,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("alert", alertSchema);

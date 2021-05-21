const mongoose = require("mongoose");
const User = require("./User");

const CitationsDaily = new mongoose.Schema({
  user_id: {
    type: String,
    ref: User,
  },
  citations: Number,
  day: String,
  month: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("citations_daily", CitationsDaily);

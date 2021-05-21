const mongoose = require("mongoose");
const User = require("./User");

const HIndexDaily = new mongoose.Schema({
  user_id: {
    type: String,
    ref: User,
  },
  hIndex: Number,
  day: String,
  month: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("hIndex_daily", HIndexDaily);

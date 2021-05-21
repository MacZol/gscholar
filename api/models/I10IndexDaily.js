const mongoose = require("mongoose");
const User = require("./User");

const I10IndexDaily = new mongoose.Schema({
  user_id: {
    type: String,
    ref: User,
  },
  i10Index: Number,
  day: String,
  month: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("i10Index_daily", I10IndexDaily);

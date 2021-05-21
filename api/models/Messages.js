const mongoose = require("mongoose");
const User = require("./User");

const messageSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: User,
  },
  name: String,
  message: String,
  updatedAt: Date,
  citations: Number,
  citationsLastWeek: Number,
  hIndex: Number,
  hIndexLastWeek: Number,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("messages", messageSchema);

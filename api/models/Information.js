const mongoose = require("mongoose");
const User = require("./User");

const informationSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: User,
  },
  scholar_id: String,
  totalCitations: Number,
  totalHIndex: Number,
  totalI10Index: Number,

  citationsSince2016: Number,
  hIndexSince2016: Number,
  i10IndexSince2016: Number,

  citationsLastWeek: Number,
  hIndexLastWeek: Number,
  i10IndexLastWeek: Number,

  citationsLastMonth: Number,
  hIndexLastMonth: Number,
  i10IndexLastMonth: Number,

  citationsToday: Number,
  hIndexToday: Number,
  i10IndexToday: Number,

  profileView: Number,
  publicationView: Number,
  fullTextDownload: Number,
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  weekDateRecord: Date,
  monthDataRecord: Date,
  dailyDataRecord: Date,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("information", informationSchema);

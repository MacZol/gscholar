const mongoose = require("mongoose");
const User = require("./User");

const articleSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: User,
  },
  scholar_id: String,
  article_name: String,
  citations: Number,
  publicationYear: Date,
  category: String,
  info: String,
  author: String,
  updatedAt: Date,
  linkToCitations:String,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("articles", articleSchema);

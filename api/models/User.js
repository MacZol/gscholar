const mongoose = require("mongoose");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  first_Name: String,
  last_Name: String,
  password: String,
  email: String,
  isEmailVerified: Boolean,
  name: String,
  verifyCode: String,
  token: String,
  role: {
    type: String,
    enum: ["admin", "user", "staff"],
    default: "user",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  google_scholar_id: String,
  profile_picture: String,
  updatedAt: Date,
});

UserSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 60 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);

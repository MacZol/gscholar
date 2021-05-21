const User = require("../../models/User");
const helper = require("../../../utils/helper");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

exports.ForgotPW = async (req, res) => {
  let { email } = req.body;
  const user = await User.findOne({ email });
//   create a random code for token and save in db
  let code = user.createPasswordResetToken();
  await user.save();

  helper.send_email(
    email,
    "Reset your Password",
    `
  Hello!
  <br/>
  Somebody requested to reset your  account password!
  <br/>
  If the request was done by you , please click on the link below to change your password.
  <br/>
  https://${req.headers.host}/reset?email=${email}&code=${code}
  <br/>
  <br/>
  If the request was not done by you , please kindly ignore this.
  <br/>
  Note : Link expires in 60 minutes.
  <br>
  <br/>
  &copy;  (${new Date().getFullYear()})
  `
  );
  res.json({
    type: "success",
    msg:
      "We have sent you a confirmation link to your mail, please click on the link sent to reset your password!",
  });
};

exports.ResetPW = async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.query.code)
    .digest("hex");
  // const user = await User.findOne({
  //   passwordResetToken: hashedToken,
  //   passwordResetExpires: { $gt: Date.now() },
  // });
  const user = await User.findOne({
    $and: [
      { passwordResetToken: hashedToken },
      { passwordResetExpires: { $gt: Date.now() } },
    ],
  });
  if (user === null) {
    res.json({
      type: "error",
      msg: "Token is invalid or expired",
    });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    user.token = "";
    await user.save();
    res.json({
      type: "success",
      msg: "Your password has been changed successfully!",
    });
  }
};

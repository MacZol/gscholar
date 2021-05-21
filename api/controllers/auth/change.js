const User = require("../../models/User");
const bcrypt = require("bcrypt");

exports.ChangePassword = async (req, res) => {
  let { newp } = req.body;
  await User.updateOne(
    { _id: req.data.id },
    {
      $set: {
        password: await bcrypt.hash(newp, 10),
        passwordChangedAt: new Date(),
      },
    }
  );
  res.json({
    type: "logout",
    msg: "Your password has been changed successfully!",
  });
};

const User = require("../../models/User");
const helper = require("../../../utils/helper");

exports.Login = async (req, res) => {
  let { email, password } = req.body;
  let userExists = await User.findOne(
    { email },
    "username email profile_picture first_Name last_Name"
  );
  let token = await helper.Sign({
    email,
    id: userExists._id,
    username: userExists.username,
  });
  await User.updateOne(
    { email: userExists.email },
    {
      $set: { token },
    }
  );
  res.json({
    type: "success",
    token,
    details: userExists,
    msg: "Logged In Successfully",
  });
};

const User = require("../../models/User");
const helper = require("../../../utils/helper");

exports.UpdateProfile = async (req, res) => {
  try {
    const { first_Name, last_Name, email } = req.body;
    const user = await User.findOne({ _id: req.data.id });
    let files = req.files ? req.files.profile_picture : undefined;
    let image = "";
    if (files) {
      let upload = helper.fileUpload(
        files,
        req.data.id,
        "/profileimages/",
        res
      );
      image = upload[0];
    }
    let verifyCode = Math.random().toString(36).substring(5);
    let updatedInformation = {
      first_Name: first_Name ? first_Name : user.first_Name,
      last_Name: last_Name ? last_Name : user.last_Name,
      profile_picture: image.length > 0 ? image : user.profile_picture,
      email: email && email !== user.email ? email : user.email,
      isEmailVerified: email && email !== user.email ? false : true,
      verifyCode: email && email !== user.email ? verifyCode : user.verifyCode,
      updatedAt: new Date(),
    };

    await User.findByIdAndUpdate(user._id, updatedInformation);
    // If email is updated logout the user and ask him to verify his email
    if (email && email !== user.email) {
      helper.send_email(
        email,
        "Verify your Identity",
        `
    Hey,
    <br/>
    You've successfully registered!
    <br/>
    Click the link below to verify your account :
    http://${req.headers.host}/api/auth/verify?code=${verifyCode}&email=${email}
    <br/>
    <br/>
    Thanks!
    &copy; ${new Date().getFullYear()}
    `
      );
      res.json({
        type: "logout",
        msg:
          "We have sent the verification link to your email, please verify your email",
      });
    } else {
      res.json({
        type: "success",
        msg: "Profile Updated Successfully",
      });
    }
  } catch (e) {
    console.error(e);
  }
};
// Load the user profile
exports.GetProfile = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.data.id });
    res.json({
      type: "success",
      user,
    });
  } catch (e) {
    console.error(e);
  }
};

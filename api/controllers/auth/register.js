const User = require("../../models/User");
const bcrypt = require("bcrypt");
const helper = require("../../../utils/helper");
const Scrape = require("../../../utils/scraper");

exports.Register = async (req, res) => {
  try {
    let {
      first_Name,
      last_Name,
      password,
      email,
      google_scholar_id: id,
    } = req.body;
    let verifyCode = Math.random().toString(36).substring(5);
    let array = id.split("?");
    if (array[0] !== "https://scholar.google.com/citations") {
      res.json({
        type: "error",
        msg: "Invalid google scholar url",
      });
    } else {
      let google_scholar_id;
      if (array[1].startsWith("user=")) {
        google_scholar_id = array[1].split("user=")[1].split("&")[0];
      }
      await new User({
        email,
        password: await bcrypt.hash(password, 10),
        verifyCode,
        first_Name,
        last_Name,
        google_scholar_id,
        isEmailVerified: false,
        date: new Date(),
      }).save();
      helper.send_email(
        email,
        "Verify your Identity",
        `
    Hey,
    <br/>
    You've successfully registered!
    <br/>
    Click the link below to verify your account:
    http://${
      req.headers.host
    }/api/auth/verify?code=${verifyCode}&email=${email}
    <br/>
    <br/>
    Thanks!
    &copy; ${new Date().getFullYear()}
    `
      );

      res.json({
        type: "success",
        msg:
          "Registration completed! We've sent a link to your email address, please check your email address and click on the link to verify your email address. You can only login after you verify your email address!",
      });
    }
  } catch (e) {
    res.json({
      type: "error",
      msg: e,
    });
  }
};
exports.VerifyCode = async (req, res) => {
  try {
    let { code, email } = req.query;
    let checkDetails = await User.findOne({
      $and: [{ verifyCode: code }, { email }],
    });
    if (checkDetails === null) {
      res.send("Invalid details submitted!");
    } else if (checkDetails.isEmailVerified) {
      res.send("You're already verified.");
    } else {
      await User.updateOne(
        { $and: [{ verifyCode: code }, { email }] },
        { $set: { isEmailVerified: true } }
      );
      Scrape(checkDetails);
      res.send(
        `Your account has been verified. You can close this window now!`
      );
    }
  } catch (e) {
    res.json({
      type: "error",
      msg: e,
    });
  }
};

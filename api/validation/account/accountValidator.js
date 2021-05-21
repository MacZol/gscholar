const Validator = require("validator");
const helper = require("../../../utils/helper");
const User = require("../../models/User");
const { domain: domainArray } = require("../../../utils/domain.json");

exports.updateProfileInput = async (req, res, next) => {
  try {
    let error = "";
    let { first_Name, last_Name, email } = req.body;
    let emailExists = await User.findOne({ email });
    let domain = email ? email.substring(email.lastIndexOf("@") + 1) : null;

    if (
      helper.isEmpty(first_Name) ||
      first_Name === undefined ||
      helper.isEmpty(last_Name) ||
      last_Name === undefined ||
      helper.isEmpty(email) ||
      email === undefined
    ) {
      error = "Do not leave any fields empty ";
    } else {
      if (!Validator.isEmail(email)) {
        errror = "Email is invalid";
      }
      if (Validator.isEmail(email)) {
        if (!domainArray.includes(domain)) {
          error =
            "The email address is not accepted!! Try using gmail , yahoo , hotmail , outlook , me , inbox or icloud email address.";
        }
      }
      if (emailExists !== null) {
        if (emailExists._id.toString() !== req.data.id.toString()) {
          error = "Email adress is already in use, please use another email";
        }
      }

      if (!Validator.isLength(first_Name, { min: 3, max: 30 })) {
        error = "First Name must be between 3 to 30 characters long";
      }
      if (!Validator.isLength(last_Name, { min: 3, max: 30 })) {
        error = "Last Name must be between 3 to 30 characters long";
      }
    }
    // error handler
    if (!helper.isEmpty(error)) {
      res.json({
        type: "error",
        msg: error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
  }
};

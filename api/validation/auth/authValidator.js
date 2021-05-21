const Validator = require("validator");
const helper = require("../../../utils/helper");
const User = require("../../models/User");
const { domain: domainArray } = require("../../../utils/domain.json");
const bcrypt = require("bcrypt");

exports.validateRegisterInput = async (req, res, next) => {
  try {
    let error = "";
    let {
      first_Name,
      last_Name,
      password,
      email,
      google_scholar_id,
    } = req.body;
    let emailExists = await User.findOne({ email });
    let domain = email.substring(email.lastIndexOf("@") + 1);

    if (
      helper.isEmpty(first_Name) ||
      first_Name === undefined ||
      helper.isEmpty(last_Name) ||
      last_Name === undefined ||
      helper.isEmpty(password) ||
      password === undefined ||
      helper.isEmpty(email) ||
      email === undefined ||
      helper.isEmpty(google_scholar_id) ||
      google_scholar_id === undefined
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
        error = "Email address is already in use, please use another email";
      }
      if (!Validator.isLength(first_Name, { min: 3, max: 30 })) {
        error = "First Name must be between 3 to 30 characters long";
      }
      if (!Validator.isLength(last_Name, { min: 3, max: 30 })) {
        error = "Last Name must be between 3 to 30 characters long";
      }
      if (!Validator.isLength(password, { min: 6, max: 50 })) {
        error = "Password must be between 6 to 30 characters long";
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
exports.validateLoginInput = async (req, res, next) => {
  try {
    let error = "";
    let { email, password } = req.body;
    if (
      helper.isEmpty(email) ||
      email === undefined ||
      helper.isEmpty(password) ||
      password === undefined
    ) {
      error = "Do not leave any fields empty ";
    } else {
      let usernameExists = await User.findOne(
        { email },
        "email isEmailVerified  password "
      );
      if (!Validator.isEmail(email)) {
        errror = "Email is invalid";
      } else if (usernameExists === null) {
        error = "Invalid Credentials,Email or Password Incorrect";
      } else if (usernameExists.isEmailVerified === false) {
        error =
          "You haven't verified your account, please check your email address and click on verification link to verify your account and login";
      } else if (!(await bcrypt.compare(password, usernameExists.password))) {
        error = "Invalid Credentials,Email or Password Incorrect";
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

exports.validateForgetPassword = async (req, res, next) => {
  try {
    let error = "";
    let { email } = req.body;

    if (helper.isEmpty(email) || email === undefined) {
      error = "Do not leave any fields empty";
    } else {
      let userCheck = await User.findOne({ email });
      if (!Validator.isEmail(email)) {
        error = "Email is invalid";
      } else if (userCheck === null) {
        error = "The email is not registered, Please register now";
      }
    }

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

exports.validateResetPassword = async (req, res, next) => {
  try {
    let error = "";
    let { password, confirmPassword } = req.body;
    const user = await User.findOne({ email: req.query.email });
    if (
      helper.isEmpty(password) ||
      password === undefined ||
      helper.isEmpty(confirmPassword) ||
      confirmPassword === undefined
    ) {
      error = "Do not leave any fields empty";
    } else {
      if (user === null) {
        error = "No user found with that email";
      } else {
        if (!Validator.isLength(password, { min: 6, max: 50 })) {
          error = "Password must be between 6 to 30 characters long";
        } else if (!Validator.equals(password, confirmPassword)) {
          error = "Passwords must match";
        }
      }
    }
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

exports.validateChangePassword = async (req, res, next) => {
  try {
    let { old, newp, repeat } = req.body;
    let error = "";
    if (
      helper.isEmpty(old) ||
      old === undefined ||
      helper.isEmpty(newp) ||
      newp === undefined ||
      helper.isEmpty(repeat) ||
      repeat === undefined
    ) {
      error = "Do not leave any fields empty ";
    } else {
      if (newp !== repeat) {
        error = "Your new password cannot be your old password";
      } else if (old === newp) {
        error = "Your new password cannot be your old password";
      } else if (!Validator.isLength(newp, { min: 6, max: 50 })) {
        error = "Password must be between 6 to 30 characters long";
      } else {
        let det = await User.findOne(
          { username: req.data.username },
          "password -_id"
        );
        if (!(await bcrypt.compare(old, det.password))) {
          error = "Invalid Old Password";
        }
      }
    }
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

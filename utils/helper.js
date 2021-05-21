const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const moment = require("moment");

const {
  email: useremail,
  password: userpassword,
  JWTSecret,
} = require("../config.json");
const User = require("../api/models/User");

// it checks if a text or an object is empty
exports.isEmpty = (text) => {
  if (
    !text ||
    text === undefined ||
    text === null ||
    text === "" ||
    (typeof text === "object" && Object.keys(text).length === 0) ||
    text.length < 1
  ) {
    return true;
  } else {
    return false;
  }
};
exports.isEmail = (email) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// sign a jwt
exports.Sign = (data) => {
  return jwt.sign(data, JWTSecret);
};

/** 
    helper function to check if user is authenticated;
    In post man; 
    User headers: scholarauthtoken
    Value: ScholarApp AuthTokan ${token}
*/
exports.isLoggedIn = async (req, res, next) => {
  // assigning our own req.headers for verification
  const header = req.headers["scholarauthtoken"];
  // check if header exists
  if (typeof header !== "undefined") {
    // header should be SRApp AuthToken jwttoken
    const bear = header.split(" ");
    const token = bear[2];
    if (bear[0] !== "ScholarApp" || bear[1] !== "AuthToken") {
      res.json({
        type: "error",
        msg: "Invalid Token Quote",
      });
    } else {
      req.token = token;
      req.data = jwt.verify(token, JWTSecret);
      let udet = await User.findOne({
        $and: [{ _id: req.data.id }, { token: token }],
      });
      if (udet !== null) {
        // if user found
        next();
      } else {
        // if user not found or token is invalid
        res.json({
          type: "logout",
          msg: "Token Invalid or Expired, Please Log in Again",
        });
      }
    }
  } else {
    res.json({
      type: "logout",
      msg: "Authorization header not present",
    });
  }
};

exports.send_email = (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email || useremail, //replace with your email
      pass: process.env.password || userpassword, //replace with your password
    },
  });

  const mailOptions = {
    from: `App Admin ${process.env.emailusername}`,
    to: email,
    subject: subject,
    html: text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
/*
  this function takes an single file or array of file;
  but returns an array with the location of that image
  if only single image sent the extract the first element 
  from the array or else whole array
 */
exports.fileUpload = (files, username, location, res) => {
  // checking if the file is single or multiple
  let isFilesArray = Array.isArray(files) ? true : false;
  let filesArray = [];
  if (isFilesArray) {
    filesArray = files;
  } else {
    filesArray.push(files);
  }
  let imgError = false;
  let error = "";
  let imageName = null;
  const images = [];
  filesArray.map((file) => {
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/jpeg"
    ) {
      imgError = true;
      error = "Only png and jpg images are allowed";
    } else if (file.size > 10242880) {
      imgError = true;
      imgMsg = "Max file size to upload is 10Mb";
    } else {
      imageName =
        location + username + new Date().getTime() + Math.random() + ".jpg";
      images.push(imageName);
      file.mv("public" + imageName, (err, succ) => {
        // console.log(err,succ)
      });
    }
  });
  if (error) {
    res.json({
      type: "error",
      msg: error,
    });
  } else {
    return images;
  }
};

exports.scheduleMailTime = (schedule) => {
  let sendMailAt;
  if (schedule === "weekly") {
    let currentTime = moment(new Date());
    sendMailAt = moment(currentTime).add(7, "days");
  } else if (schedule === "bi-weekly") {
    let currentTime = moment(new Date());
    sendMailAt = moment(currentTime).add(14, "days");
  } else if (schedule === "monthly") {
    let currentTime = moment(new Date());
    sendMailAt = moment(currentTime).add(30, "days");
  }
  return sendMailAt;
};

exports.dayOfWeekAsString = (dayIndex) => {
  return (
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][dayIndex] || ""
  );
};

exports.dayOfMonthAsString = (monthIndex) => {
  return (
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][monthIndex] || ""
  );
};

exports.getMonths = (fromDate, toDate) => {
  const fromYear = fromDate.getFullYear();
  const fromMonth = fromDate.getMonth();
  const toYear = toDate.getFullYear();
  const toMonth = toDate.getMonth();
  const months = [];
  for (let year = fromYear; year <= toYear; year++) {
    let month = year === fromYear ? fromMonth : 0;
    const monthLimit = year === toYear ? toMonth : 11;
    for (; month <= monthLimit; month++) {
      months.push(month);
    }
  }
  return months;
};

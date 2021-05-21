const Alert = require("../../models/Alert");
const User = require("../../models/User");
const moment = require("moment");
const helper = require("../../../utils/helper");

exports.Create = async (req, res) => {
  try {
    if (helper.isEmpty(req.body)) {
      res.json({
        type: "error",
        msg: "Do not leave body empty",
      });
    } else {
      const { citations, hIndex, alert_name, schedule, email } = req.body;
      const sArray = ["weekly", "bi-weekly", "monthly"];
      if (!sArray.includes(schedule)) {
        res.json({
          type: "error",
          msg: "Invalid Schedule",
        });
      } else {
        let user = await User.findOne(
          { _id: req.data.id },
          "google_scholar_id"
        );
        let sendMailAt = helper.scheduleMailTime(schedule);
        if (!helper.isEmail(email)) {
          res.json({
            type: "error",
            msg: "Email is Invalid",
          });
        } else {
          let alert = {
            user_id: user._id,
            google_scholar_id: user.google_scholar_id,
            alert_name,
            citations: citations ? true : false,
            citationsPastWeek: citations ? true : false,
            hIndex: hIndex ? true : false,
            hIndexPastWeek: hIndex ? true : false,
            sendMailAt,
            email,
            schedule,
          };
          await Alert.create(alert);
          res.json({
            type: "success",
            msg: "Alert Created Successfully",
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
};

exports.Update = async (req, res) => {
  try {
    let { id } = req.params;
    let alert = await Alert.findOne({
      $and: [{ _id: id }, { user_id: req.data.id }],
    });
    if (alert === null) {
      res.json({
        type: "error",
        msg: "No alert with that id",
      });
    } else {
      let { alert_name, email, schedule } = req.body;
      if (!req.body) {
        res.json({
          type: "error",
          msg: "Do not leave any fields empty",
        });
      } else {
      }
      let sendMailAt = helper.scheduleMailTime(schedule);
      if (email && !helper.isEmail(email)) {
        res.json({
          type: "error",
          msg: "Email is Invalid",
        });
      } else {
        let updatedAlert = {
          updatedAt: moment(new Date()),
          sendMailAt: schedule ? sendMailAt : alert.sendMailAt,
          email: email ? email : alert.email,
          schedule: schedule ? schedule : alert.schedule,
          alert_name,
        };
        await Alert.findByIdAndUpdate(id, updatedAlert);
        res.json({
          type: "success",
          msg: "Alert Updated Successfully",
        });
      }
    }
  } catch (e) {
    console.error(e);
  }
};

exports.Delete = async (req, res) => {
  try {
    let { id } = req.params;
    let alert = await Alert.findOne({
      $and: [{ _id: id }, { user_id: req.data.id }],
    });
    if (alert === null) {
      res.json({
        type: "error",
        msg: "No alert with that id",
      });
    } else {
      await Alert.findByIdAndDelete(id);
      res.json({
        type: "success",
        msg: "Alert Deleted Successfully",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.GetAllAlerts = async (req, res) => {
  try {
    let alerts = await Alert.find({ user_id: req.data.id });
    if (alerts.length < 1) {
      res.json({
        type: "error",
        msg: "not found",
      });
    } else {
      res.json({
        type: "success",
        alerts,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

exports.getAlert = async (req, res) => {
  try {
    let alert = await Alert.findOne({ _id: req.params.id });
    if (alert === null) {
      res.json({
        type: "error",
        msg: "No any alert found",
      });
    } else {
      res.json({
        type: "success",
        alert,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

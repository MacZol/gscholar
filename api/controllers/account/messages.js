const Messages = require("../../models/Messages");

exports.GetAllMessages = async (req, res) => {
  try {
    let messages = await Messages.find({ user_id: req.data.id });
    if (messages.length < 1) {
      res.json({
        type: "error",
        msg: "not found",
      });
    } else {
      res.json({
        type: "success",
        messages,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

exports.GetOneMessage = async (req, res) => {
  try {
    let message = await Messages.findOne({ _id: req.params.id });
    if (message === null) {
      res.json({
        type: "error",
        msg: "No message with that id",
      });
    } else {
      res.json({
        type: "success",
        message,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

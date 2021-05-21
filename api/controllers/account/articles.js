const Articles = require("../../models/Articles");

exports.GetAllArticles = async (req, res) => {
  try {
    let articles = await Articles.find({ user_id: req.data.id });
    if (articles.length < 1) {
      res.json({
        type: "error",
        msg: "User does not have any articles to his name",
      });
    } else {
      res.json({
        type: "success",
        articles,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

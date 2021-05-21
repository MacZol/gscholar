const router = require("express").Router();
const authRoute = require("./auth/index");
const accountRoute = require("./account/index");
const rateLimit = require("express-rate-limit");

// limiting the no of api request for 10 minutes
const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 50,
  handler: (req, res) => {
    res.json({
      type: "error",
      limited: true,
      msg:
        "Too many requests . Please hold a while and try again after 10 minutes.",
    });
  },
});
router.use("/auth", authLimiter, authRoute);
router.use("/account", accountRoute);
module.exports = router;

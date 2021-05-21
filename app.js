const express = require("express");
const app = express();
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const helmet = require("helmet");
const compression = require("compression");
const bparser = require("body-parser");
const dbConnect = require("./utils/db");
const config = require("./config.json");
const cron = require("node-cron");
const cors = require("cors");
const { scrape, sendMail, dailyDataLog } = require("./utils/CronFunctions");

// middlewares
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; "
  );
  return next();
});
app.use(compression());

app.use(express.static("public"));
app.use(express.static("public/build"));

// fileupload
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    safeFileNames: true,
    preserveExtension: true,
    limits: { fileSize: 500 * 1024 * 1024 },
  })
);

// bodyparser
app.use(bparser.urlencoded({ extended: true }));
app.use(bparser.json());

// routes
const AppRoutes = require("./api/routes/index");

app.use("/api", AppRoutes);

// connect to the database
dbConnect();

cron.schedule(config.scrape_cron_time, async function () {
  scrape();
  sendMail();
});

cron.schedule(config.log_cron_time, async function () {
  dailyDataLog();
});
// build react
app.get("*", (req, res) => {
  res.sendFile(require("path").resolve("./public/build/index.html"));
});

// Run the server
const port = process.env.PORT || config.PORT;
app.listen(port, (err) => {
  err
    ? console.log("Could not start server", err)
    : console.log(`App is running on http://localhost:${port}`);
});

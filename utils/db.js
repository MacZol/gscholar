// database connection here
const mongoose = require("mongoose");
const config = require("../config.json");

// connection function for connecting to the db
const dbConnect = () => {
  // replace the url in config.json file
  const url = process.env.dbUrl || config.dbUrl;
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("System Connected to the database"))
    .catch((e) => console.error(e));
};
module.exports = dbConnect;

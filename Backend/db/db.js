const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = connectDB;

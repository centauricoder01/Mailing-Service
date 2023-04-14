const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    versionKey: false,
  }
);

const authModel = mongoose.model("Auth", authSchema);

module.exports = { authModel };

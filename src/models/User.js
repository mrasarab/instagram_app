const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  salt: String
});

module.exports = model("User", userSchema);

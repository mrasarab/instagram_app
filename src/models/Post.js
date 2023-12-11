const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  author: String,
  caption: String,
  createdAt: String,
  like: Number,
  comment: [String],
});

module.exports = model("Post", postSchema);

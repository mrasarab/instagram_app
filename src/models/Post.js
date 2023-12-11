const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  authorId: Number,
  caption: String,
  createdAt: String,
  like: Number,
  comment: [Number],
});

module.exports = model("Post", postSchema);



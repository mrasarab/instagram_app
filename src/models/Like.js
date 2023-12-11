const { model, Schema } = require("mongoose");

const likeSchema = new Schema({
  postId: Number,
  authorId: Number,
});


module.exports = model('Like', likeSchema)
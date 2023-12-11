const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
    content: String,
    postId: Number,
    authorId: Number,
});


module.exports = model('Comment', commentSchema)
const User = require("../models/User");
const Post = require("../models/Post");
const Like = require("../models/Like");
const Comment = require("../models/Comment");
const bcrypt = require("bcrypt");
const { logger } = require("../utils/logger");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePasswords = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

module.exports = {
  Query: {
    async post(_, { ID }) {
      return await Post.findById(ID);
    },
    async postsByAuthor(_, { authorId }) {
      return await Post.findMany(authorId);
    },
    async likesByPost(_, { postId }) {
      return await Like.findMany(postId);
    },
    async commentsByPost(_, { postId }) {
      return await Like.findMany(postId);
    },
  },

  Mutation: {
    async signupUser(_, { UserInput: { username, email, password } }) {
      const signupUser = new User({
        username: username,
        email: email,
        password: hashPassword(password),
      });
      const res = await signupUser.save();
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteUser(_, { ID }) {
      const wasDeleted = (await User.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },
    async editUser(_, { ID, UserInput: { username, password } }) {
      const wasEdited = (
        await User.updateOne(
          { _id: ID },
          {
            username: username,
            password: hashPassword(password),
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};

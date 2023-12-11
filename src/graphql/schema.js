const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    username: String
    email: String
    password: String
  }

  type Post {
    authorId: Int!
    caption: String!
    createdAt: String!
    likesCount: Int
    like: [Like]
    comment: [Comment]
  }
  type Comment {
    content: String!
    postId: Int!
    authorId: Int!
  }

  type Like {
    postId: Int!
    authorId: Int!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input PostInput {
    caption: String!
  }

  input CommentInput {
    content: String!
  }
  input LikeInput {
    post: ID!
  }

  type Query {
    user(email: String!): User
    post(postId: ID!): Post # Adjusted to fetch a post by postId
    postsByAuthor(authorId: ID!): [Post] # Fetch posts by authorId
    likesByPost(postId: ID!): [Like] # Fetch likes by postId
    commentsByPost(postId: ID!): [Comment] # Fetch comments by postId
  }

  type Mutation {
    # user mutation
    signupUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
    editUser(ID: ID!, userInput: UserInput): Boolean
    # post mutation
    createPost(postInput: PostInput): Post!
    deletePost(ID: ID!): Boolean
    editPost(ID: ID!, postInput: PostInput): Boolean
    # comment mutation
    createComment(commentInput: CommentInput): Comment!
    deleteComment(ID: ID!): Boolean
    # like mutation
    like(likeInput: LikeInput): Like!
    dislike(ID: ID!): Boolean
  }
`;

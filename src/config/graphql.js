const ApolloServer = require("apollo-server");
const { logger } = require("../utils/logger");
const userTypeDefs = require("../graphql/schemas/userSchema");
const postTypeDefs = require("../graphql/schemas/postSchema");

const userResolvers = require("../graphql/resolvers/userResolvers");
const postResolvers = require("../graphql/resolvers/postResolvers");

const server = new ApolloServer({
  userTypeDefs,
  postTypeDefs,
  userResolvers,
  postResolvers,
});
const port = 5000;

const graphQl = async () => {
  try {
    await server.listen({ port: port });
    logger.info("graphql apollo server connected");
    console.log("graphql apollo server connected");
  } catch (error) {
    logger.error(`graphql apollo server not connected because : ${error}`);
    console.log(`graphql apollo server not connected because : ${error}`);
  }
};

const ApolloServer = require("apollo-server");
const { logger } = require("../utils/logger");
const typeDefs = require("../graphql/schema");

const resolvers = require("../graphql/resolver");

const server = new ApolloServer({
  typeDefs,
  resolvers,
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

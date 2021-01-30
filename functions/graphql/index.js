const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.createHttpServer({ cors: true });
const express = server.express;

module.exports = express;
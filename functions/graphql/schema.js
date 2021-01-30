const typeDefs = `
  type Query {
    hello(name: String): String!
  }

  type Mutation {
    addTodo(text: String): String!
  }
`;

module.exports = typeDefs;

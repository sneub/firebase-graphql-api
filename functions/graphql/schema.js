const typeDefs = `
  type Query {
    hello(name: String): String!
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(text: String): String!
  }

  type Todo {
    text: String
  }
`;

module.exports = typeDefs;

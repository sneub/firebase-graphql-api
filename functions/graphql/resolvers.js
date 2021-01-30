const firebase = require('firebase-admin');

const resolvers = {
  Query: {
    async hello(_, { name }) {
      return `Hello ${name || 'World'}`;
    },
  },

  Mutation: {
    async addTodo(_, { text }) {
      const db = firebase.firestore();
      const ref = db.collection('todos').doc();
      await ref.set({ text });
      return ref.id;
    },
  }
};

module.exports = resolvers;

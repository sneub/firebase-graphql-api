const firebase = require('firebase-admin');

const resolvers = {
  Query: {
    async hello(_, { name }) {
      return `Hello ${name || 'World'}`;
    },

    async getTodos() {
      const db = firebase.firestore();
      const todos = await db.collection('todos').get();
      return todos.docs.map(doc => doc.data());
    }
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

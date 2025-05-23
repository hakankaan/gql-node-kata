module.exports = {
  schema: ['../backend/schema.graphql'],
  documents: ['src/graphql/**/*.graphql'],
  extensions: {
    endpoints: {
      default: {
        url: 'http://localhost:4000/graphql',
      },
    },
  },
};

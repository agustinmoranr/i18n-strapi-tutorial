module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      apolloServer: {
        introspection: true,
      },
      playgroundAlways: true,
    },
  },
});

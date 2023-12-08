const fs = require("fs");
const path = require("path");

const { ApolloServer, gql } = require("apollo-server");

const Query=require('./resolvers/Query')



// A map of functions which return data for the schema.
const resolvers = {
  Query
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

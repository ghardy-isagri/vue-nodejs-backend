import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers/index.js';

const port: string | number = process.env['PORT'] || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }).then(({ url }) => {
  console.log(`Server runs at: ${url}`);
});

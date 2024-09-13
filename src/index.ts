import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const port: string | number = process.env['PORT'] || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }).then(({ url }) => {
  console.log(`Server runs at: ${url}`);
});

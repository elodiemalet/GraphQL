import { ApolloServer } from 'apollo-server';
import typeDefs         from './typeDefs';
import resolvers        from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers, tracing: true });

server.listen().then(({ url }) => {
    console.log(`server ready ${url}`);
});
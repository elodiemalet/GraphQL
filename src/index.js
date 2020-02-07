import { ApolloServer } from 'apollo-server';
import typeDefs         from './typeDefs';
import resolvers        from './resolvers';
import dataSources      from './dataSources';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        ...dataSources,
    }),
    tracing: true
});

server.listen().then(({ url }) => {
    console.log(`server ready ${url}`);
});
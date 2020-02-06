const products = [
    {
        name: 'Livre 1',
    },
];

const resolvers = {
    Query: {
        products: ()   => products,
    },
};

export default resolvers;
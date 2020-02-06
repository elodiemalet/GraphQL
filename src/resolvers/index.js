const products = [
    {
        id: "1",
        name: 'Livre 1',
    },
    {
        id: "2",
        name: 'Livre 2',
    },
];

const resolvers = {
    Query: {
        products: ()    => products,
        productById: ( parent, {id}, context, info ) => products.find((product) => {
            return product.id === id ? product : null
        }),
    },
};

export default resolvers;
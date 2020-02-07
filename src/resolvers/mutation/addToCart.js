export default async (_, {productInput, cartId}, {dataSources}) => {
    await dataSources.cart.addToCart(productInput, cartId);
    return {error: true};
}
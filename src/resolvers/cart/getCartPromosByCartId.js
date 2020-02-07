export default async (parent, args, {dataSources}) => {
    const cartpromos = await dataSources.cartpromo.getCartPromosByCartId(parent.id);
    return cartpromos;
}
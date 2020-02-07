export default async (parent, args, {dataSources}) => {
    const cart = await dataSources.cart.getCartById(args.id);
    return cart;
}
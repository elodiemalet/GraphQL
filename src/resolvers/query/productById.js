export default async (parent, args, {dataSources}) => {
    const product = await dataSources.product.getProductById(args.id);
    return product;
}
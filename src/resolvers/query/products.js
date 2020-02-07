export default async (_, args, {dataSources}) => {
    const product = await dataSources.product.getProducts();
    return product;
}
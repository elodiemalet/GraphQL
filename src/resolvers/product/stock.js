export default async (parent, args, {dataSources}) => {
    const stockByProductId = await dataSources.stock.getStockByProductId(parent.id);
    return stockByProductId;
}
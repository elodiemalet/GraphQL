export default async (_, args, {dataSources}) => {
    const promo = await dataSources.promo.getPromos(args.id);
    return promo;
}
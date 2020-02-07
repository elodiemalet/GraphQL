export default async (parent, args, {dataSources}) => {
    const promo = await dataSources.promo.getPromoById(args.id);
    return promo;
}
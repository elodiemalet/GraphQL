export default async ({id}, args, {dataSources}) => {
    const total = await dataSources.cartproduct.getCartTotalById(id);
    const totalpromo = await dataSources.cartpromo.getCartPromoTotalByCartId(id);

    return total * (1 - (totalpromo/100)) ;
}


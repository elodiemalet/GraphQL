import { SQLDataSource } from "./sql-data-source";

export default class CartPromoDataSource extends SQLDataSource {

    async getCartPromosByCartId(id) {
        const result = await this.knexConnection.raw('SELECT * FROM cartpromo JOIN promo ON promo.id=cartpromo.promo_id WHERE cart_id = ?', [id]);
        return result[0];
    }

    async getCartPromoTotalByCartId(id) {
        const result = await this.knexConnection.raw('SELECT SUM(promo.reduction) as sum FROM cartpromo JOIN promo ON promo.id=cartpromo.promo_id WHERE cart_id = ? ', [id]);
        return result[0][0]['sum'];
    }

}
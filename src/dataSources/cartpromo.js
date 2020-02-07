import { SQLDataSource } from "./sql-data-source";

export default class CartPromoDataSource extends SQLDataSource {

    async getCartPromosByCartId(id) {
        const result = await this.knexConnection.raw('SELECT * FROM cartpromo WHERE cart_id = ?', [id]);
        return result[0];
    }
}
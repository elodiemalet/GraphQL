import { SQLDataSource } from "./sql-data-source";

export default class CartProductDataSource extends SQLDataSource {

    async getCartProductsByCartId(id) {
        const result = await this.knexConnection.raw('SELECT * FROM cartproduct WHERE cart_id = ?', [id]);
        return result[0];
    }
}
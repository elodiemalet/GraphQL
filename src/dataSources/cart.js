import { SQLDataSource } from "./sql-data-source";

export default class CartDataSource extends SQLDataSource {

    async getCartById(id) {
        const result = await this.knexConnection.raw('SELECT * FROM cart WHERE id = ?', [id]);
        return result[0][0];
    }

    async addToCart({productId}, cartId) {
        return await this.knexConnection('cartproduct').insert({product_id: productId, cart_id: cartId});
    }

}
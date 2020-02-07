import { SQLDataSource } from "./sql-data-source";

export default class CartProductDataSource extends SQLDataSource {

    async getCartProductsByCartId(id) {
        const result = await this.knexConnection.raw('SELECT * FROM cartproduct JOIN product ON product.id=cartproduct.product_id WHERE cart_id = ?', [id]);

        return result[0];
    }

    async getCartTotalById(id) {
        const result = await this.knexConnection.raw('SELECT SUM(product.price) as sum FROM cartproduct JOIN product ON product.id=cartproduct.product_id WHERE cart_id = ? ', [id]);
        return result[0][0]['sum'];
    }
}
import { SQLDataSource } from "./sql-data-source";

export default class CartDataSource extends SQLDataSource {
    async getCartById(id) {
        const result = await this.knexConnection.raw('SELECT * FROM cart WHERE id = ?', [id]);
        return result[0][0];
    }

}
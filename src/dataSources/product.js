import { SQLDataSource } from "./sql-data-source";

export default class ProductDataSource extends SQLDataSource {
    async getProductById(id) {
        const result = await this.knexConnection.raw('SELECT * FROM product WHERE id = ?', [id]);
        return result[0][0];
    }

    async getProducts() {
        const result = await this.knexConnection.raw('SELECT * FROM product');
        return result[0];
    }
}
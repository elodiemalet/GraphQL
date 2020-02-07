import { SQLDataSource } from "./sql-data-source";

export default class StockDataSource extends SQLDataSource {
    async getStockByProductId(id) {
        const result = await this.knexConnection.raw('SELECT * FROM stock WHERE product_id = ?', [id]);
        return result[0][0];
    }

}
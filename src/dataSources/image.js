import { SQLDataSource } from "./sql-data-source";

export default class ImageDataSource extends SQLDataSource {
    async getImageByProductId(id) {
        const result = await this.knexConnection.raw('SELECT * FROM image WHERE product_id = ?', [id]);
        return result[0][0];
    }

}
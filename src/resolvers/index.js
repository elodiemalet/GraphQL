import db from '../config/db';

const resolvers = {
    Query: {
        products: async ()   => {
            const rows = await db.raw('SELECT * FROM product')
            return rows[0]
        },
        productById: async ( parent, {id}, context, info ) => {
            const rows = await db.raw('SELECT * FROM product WHERE id = ?', [id])
            return rows[0][0];
        },
    },
    Product: {
        stock: async ( {id}, args, context, info ) => {
            const rows = await db.raw('SELECT * FROM stock WHERE product_id = ?', [id])
            return rows[0][0];
        },
        image: async ( {id}, args, context, info ) => {
            const rows = await db.raw('SELECT * FROM image WHERE product_id = ?', [id])
            return rows[0][0];
        }
    }
};

export default resolvers;
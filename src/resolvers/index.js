import products from './query/products';
import productById from './query/productById';
import cartById from './query/cartById';

import image from './product/image';
import stock from './product/stock';

import cartproducts from './cart/cartproducts';
import cartpromos from './cart/cartpromos';

export default {
    Query: {
        products,
        productById,
        cartById
    },
    Product: {
        image,
        stock
    },
    Cart: {
        cartproducts,
        cartpromos
    }
}
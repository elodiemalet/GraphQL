import knexConnection from '../config/db';
import ProductDataSource from "./product";
import ImageDataSource from "./image";
import StockDataSource from "./stock";

import CartDataSource from "./cart";
import CartPromoDataSource from "./cartpromo";
import CartProductDataSource from "./cartproduct";
import PromoDataSource from "./promo";

export default {
    product: new ProductDataSource(knexConnection),
    image: new ImageDataSource(knexConnection),
    stock: new StockDataSource(knexConnection),
    cart: new CartDataSource(knexConnection),
    promo: new PromoDataSource(knexConnection),
    cartpromo: new CartPromoDataSource(knexConnection),
    cartproduct: new CartProductDataSource(knexConnection),
}

exports.up = function(knex) {
    return knex.schema.createTable('cartproduct', table => {
        table.increments();

        table.integer('cart_id').unsigned();
        table.foreign('cart_id').references('cart.id');


        table.integer('product_id').unsigned();
        table.foreign('product_id').references('product.id');

        table.integer('quantity');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cartproduct');
};

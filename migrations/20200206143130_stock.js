
exports.up = function(knex) {
    return knex.schema.createTable('stock', table => {
        table.increments();
        table.integer('quantity');
        table.integer('product_id').unsigned();
        table.foreign('product_id').references('product.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('stock');
};

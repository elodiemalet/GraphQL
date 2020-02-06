
exports.up = function(knex) {
    return knex.schema.createTable('image', table => {
        table.increments();
        table.string('path');
        table.integer('product_id').unsigned();
        table.foreign('product_id').references('product.id');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('image');
};


exports.up = function(knex) {
    return knex.schema.createTable('product', table => {
        table.increments();
        table.string('name');
        table.float('price');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('product');
};

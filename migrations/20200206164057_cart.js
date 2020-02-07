
exports.up = function(knex) {
    return knex.schema.createTable('cart', table => {
        table.increments();
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cart');
};

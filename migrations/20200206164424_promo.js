
exports.up = function(knex) {
    return knex.schema.createTable('promo', table => {
        table.increments();
        table.string('code');
        table.integer('reduction');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('promo');
};

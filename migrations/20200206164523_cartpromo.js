
exports.up = function(knex) {
    return knex.schema.createTable('cartpromo', table => {
        table.increments();

        table.integer('cart_id').unsigned();
        table.foreign('cart_id').references('cart.id');


        table.integer('promo_id').unsigned();
        table.foreign('promo_id').references('promo.id');
        
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cartpromo');
};

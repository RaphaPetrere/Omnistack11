
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); //vc vai criar uma chave primaria auto_increment

        table.string('title').notNullable(); //nome not null
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //a variavel q vai armazenar a fk
        table.foreign('ong_id').references('id').inTable('ongs'); //aqui criamos a foreign key da ong, pq n tem como um incidente ser criado sem uma ong
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

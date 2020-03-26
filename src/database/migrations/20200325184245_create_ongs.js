
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary(); //vc vai criar o campo na tabela com o tipo string e o nome id, sendo primary key
    table.string('nome').notNullable(); //nome not null
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); //passou o parametro 2 pq é o tamanho que vai conter o campo
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};

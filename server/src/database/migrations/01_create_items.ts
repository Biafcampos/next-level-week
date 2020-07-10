import Knex from 'knex';

export async function up(Knex: Knex){
 return Knex.schema.createTable('items', table => {
      table.increments('id').primary();
      table.string('Image').notNullable();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.decimal('latitude').notNullable();
      table.decimal('longitude').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();

  });

}

export async function down(knex: Knex){
        return knex.schema.dropTable('items');

}
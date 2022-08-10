/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('test',table =>{
    table.increments("user_id"),
    table.string("username"),   //you can add customize properties like not null/unique etc
    table.string("email"),
    table.string("password")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("test")
};

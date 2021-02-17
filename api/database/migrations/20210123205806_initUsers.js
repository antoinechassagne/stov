exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.date("registrationDate").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("salt").notNullable();
    table.string("pseudo").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};

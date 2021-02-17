exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("label").notNullable();
    table.integer("weight").notNullable();
    table.integer("userId").references("id").inTable("users");
    table.integer("routineId").references("id").inTable("routines");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};

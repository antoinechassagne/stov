exports.up = function (knex) {
  return knex.schema.createTable("routines", (table) => {
    table.increments("id").primary();
    table.uuid("colocationId").references("id").inTable("colocations");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("routines");
};

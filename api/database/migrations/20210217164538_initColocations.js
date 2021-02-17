exports.up = function (knex) {
  return knex.schema.createTable("colocations", (table) => {
    table.uuid("id").primary();
    table.string("label").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sessions");
};

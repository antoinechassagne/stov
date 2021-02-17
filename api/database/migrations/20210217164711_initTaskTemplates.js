exports.up = function (knex) {
  return knex.schema.createTable("taskTemplates", (table) => {
    table.increments("id").primary();
    table.uuid("colocationId").references("id").inTable("colocations");
    table.string("label").notNullable();
    table.integer("weight").notNullable();
    table.boolean("daily");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("taskTemplates");
};

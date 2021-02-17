exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.integer("taskTemplateId").references("id").inTable("taskTemplates");
    table.integer("userId").references("id").inTable("users");
    table.date("date");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};

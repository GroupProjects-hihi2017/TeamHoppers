
exports.up = function(knex, Promise) {
  return knex.schema.createTable('joinItemToOrgs', function (table) {
    table.increments('orgRelationships_id').primary()
    table.integer('itemClass_id')
    table.integer('org_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('joinItemToOrgs')
};

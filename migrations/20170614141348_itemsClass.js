
exports.up = function(knex, Promise) {
  return knex.schema.createTable('itemClass', function (table) {
    table.increments('itemClass_id').primary()
    table.integer('category_id')
    table.string('itemClass_name')
    table.text('itemClass_info')
    table.text('itemClass_img')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('itemClass')
};

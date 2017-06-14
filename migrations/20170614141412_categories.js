
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('categories', (table) => {
    table.increments('category_id')
    table.string('category_name')
    table.text('category_img')
    table.text('category_info')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('categories')
};

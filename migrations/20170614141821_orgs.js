exports.up = function (knex, Promise) {
  return knex.schema.createTable('orgs', function (table) {
    table.increments('org_id').primary()
    table.string('name')
    table.string('address')
    table.string('url')
    table.string('img')
    table.text('info')
    table.string('location')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('orgs')
}

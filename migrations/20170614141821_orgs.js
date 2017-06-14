exports.up = function (knex, Promise) {
  return knex.schema.createTable('orgs', function (table) {
    table.increments('org_id').primary()
    table.string('org_name')
    table.string('org_address')
    table.string('org_url')
    table.string('org_img')
    table.text('org_info')
    table.string('org_location')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('orgs')
}

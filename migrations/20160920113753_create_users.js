exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.string('avatar')
    table.text('bio')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}

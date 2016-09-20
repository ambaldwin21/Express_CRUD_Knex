'use strict'

var knex = require('./knex')

module.exports = {
  getAllUsers(){
    return knex('users')
  },
  getOneUser(id) {
    return knex('users')
    .where('users.id', id).first()
  },
  createOneUser(user) {
    return knex('users').insert(user)
  },
  updateOneUser(id, user) {
    return knex('users')
    .where('users.id', id)
    .update(user)
    .first()
  },
  deleteOneUser(id){
    return knex('users')
    .where('users.id', id)
    .del()
  },
}

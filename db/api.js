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
  getAllPosts(){
  return knex('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.id as postId', 'users.id as userId', 'users.avatar as avatar', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'created_at as createdAt')
  },
  getOnePost(id){
    return knex('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.id as postId', 'users.id as userId', 'users.avatar as avatar', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'created_at as createdAt')
    .where('posts.id', id).first()
  },
  createOnePost(post){
    return knex('posts').insert(post)
  },
  updateOnePost(id, newPost){
    return knex('posts').select()
      .where('id', id).first()
      .then(function(post){
        return knex('posts')
          .update({
            title: newPost.title || post.title,
            body: newPost.body || post.body,
            image_url: newPost.image_url || post.image_url,
          }).where('posts.id', id)
      })
  },
  deleteOnePost(id){
    return knex('posts').del()
      .where('posts.id', id)
  },
}

var express = require('express')
var router = express.Router()
var db = require('../db/api')

router.get('/', function(req, res) {
  db.getAllPosts().then(posts => {
    res.render('posts/posts', {posts: posts, title: 'Blog!'})
  })
})

router.get('/new', function(req, res) {
  res.render('posts/new', {title: 'Blog!'})
})

router.get('/:id', function(req, res) {
  db.getPost(req.params.id).then(post => {
    res.render('posts/post', {post: post, title: 'Blog!'})
  })
})

router.post('/', function(req, res) {
  db.createPost(req.body).then(() => {
    res.redirect('/posts')
  })
})

router.put('/:id', function(req, res) {
  db.updatePost(req.params.id, req.body).then(() => {
    res.json({'response': 'post updated'})
  })
})

router.delete('/:id', function(req, res) {
  db.deletePost(req.params.id).then(() => {
    res.json({'response': 'post deleted'})
  })
})

router.get('/:id/edit', function(req, res) {
  db.getPost(req.params.id).then(post => {
    res.render('posts/edit', {post: post, title: 'Blog!'})
  })

})

module.exports = router

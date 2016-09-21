var express = require('express')
var router = express.Router()
var db = require('../db/api')

router.get('/', function(req, res) {
  db.getAllUsers().then(users => {
    res.render('users/users', {users: users, title: 'An Excellent Blog'})
  })
})

router.get('/new', function(req, res) {
  res.render('users/new', {title: 'An Excellent Blog'})
})

router.get('/:id', function(req, res) {
  db.getUser(req.params.id).then(user => {
    res.render('users/user', {user: user, title: 'An Excellent Blog'})
  })
})

router.post('/', function(req, res) {
  db.createUser(req.body).then(() => {
    res.redirect('/users')
  })
})

router.put('/:id', function(req, res) {
  db.updateUser(req.body).then(() => {
    res.json({'response': 'user updated'})
  })
})

router.delete('/:id', function(req, res) {
  console.log('here')
  db.deleteUser(req.params.id).then(() => {
    res.json({'response': 'user deleted'})
  })
})

router.get('/:id/edit', function(req, res) {
  db.getUser(req.params.id).then(user => {
    res.render('users/edit', {user: user, title: 'An Excellent Blog'})
  })

})

module.exports = router

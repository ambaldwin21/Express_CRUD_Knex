var express = require('express')
var router = express.Router()
var db = require('../db/api')

router.get('/', function(req, res) {
  res.send('this is the users route')
})

module.exports = router

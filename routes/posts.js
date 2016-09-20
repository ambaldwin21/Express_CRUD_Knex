var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
  res.send('this is the posts route')
})

module.exports = router

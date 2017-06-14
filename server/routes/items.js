var express = require('express')
var router = express.Router()

var itemClassDb = require('../db/itemClass')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  itemClassDb.getItemClass(db)
    .then(items => {
      res.json(items)
    })
})


module.exports = router

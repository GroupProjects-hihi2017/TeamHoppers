var express = require('express')
var router = express.Router()

var categoriesDb = require('../db/categories')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  categoriesDb.getCategories(db)
    .then(categories => {
      res.json(categories)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

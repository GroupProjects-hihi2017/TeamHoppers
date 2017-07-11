var express = require('express')
var router = express.Router()
var authentication = require('basic-authentication')

var itemClassDb = require('../db/itemClass')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  itemClassDb.getItemClass(db)
    .then(items => {
      res.json(items)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

var auth = authentication({user: 'admin', password: 'admin'})

router.post('/', auth, (req, res) => {
  let db = req.app.get('db')
  let itemClass = req.body
  itemClassDb.addItemClass(itemClass, db)
    .then(response => {
      itemClassDb.getItemById(response[0], db)
        .then(itemClass => {
          res.json(response[0])
        })
    })
})


module.exports = router

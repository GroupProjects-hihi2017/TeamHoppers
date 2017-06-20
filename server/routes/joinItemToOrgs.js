var express = require('express')
var router = express.Router()

var joinDb = require('../db/joinItemToOrgs')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  joinDb.joinItemToOrgs(db)
    .then(itemOrgs => {
      res.json(itemOrgs)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

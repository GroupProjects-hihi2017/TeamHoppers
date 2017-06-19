var express = require('express')
var router = express.Router()

var orgsDb = require('../db/orgs')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  orgsDb.getOrgs(db)
    .then(orgs => {
      res.json(orgs)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

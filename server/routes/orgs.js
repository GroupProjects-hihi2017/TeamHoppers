var express = require('express')
var router = express.Router()
var authentication = require('basic-authentication')

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

var auth = authentication({user: 'admin', password: 'admin'})

router.post('/', auth, (req,res) => {
  let db = req.app.get('db')
  let org = req.body
  orgsDb.addOrg(org, db)
    .then(response => {
      orgsDb.getOrgById(response[0], db)
        .then(org => {
          res.json(response[0])
        })
    })
})

module.exports = router

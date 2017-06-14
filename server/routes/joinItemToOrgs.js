var express = require('express')
var router = express.Router()

var joinDb = require('../db/joinItemToOrgs')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  joinDb.joinItemToOrgs(db)
    .then(itemOrgs => {
      res.json(itemOrgs)
    })
})


module.exports = router

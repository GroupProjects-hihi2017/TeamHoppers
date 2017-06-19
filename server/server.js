var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
var mailgunjs = require('mailgun-js')

var categories = require('./routes/categories')
var items = require('./routes/itemClass')
var orgs = require('./routes/orgs')
var joinItemToOrgs = require('./routes/joinItemToOrgs')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))
server.set('mailgunjs', mailgunjs)

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/categories', categories)
server.use('/api/items', items)
server.use('/api/orgs', orgs)
server.use('/api/joins', joinItemToOrgs)

server.post('/contact', function (req, res) {
  var apiKey = process.env.MAILGUN_API_KEY
  var domain = process.env.MAILGUN_DOMAIN
  var mailgun = server.get('mailgunjs')({apiKey: apiKey, domain: domain})
  var data = {
    from: 'green-wgtn <postmaster@sandbox0a4e694b934b4216950e110a444c5b62.mailgun.org>',
    to: 'team.hoppers.nz@gmail.com',
    subject: req.body.name + ' ' + 'has submitted comments on green-wgtn',
    text: 'Name: ' + req.body.name + ' Email: ' + req.body.email + ' Comments: ' + req.body.comments
  }
  mailgun.messages().send(data, function (error, body) {
    if (!error) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  })
})

module.exports = server

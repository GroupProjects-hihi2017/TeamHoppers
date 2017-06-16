var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

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

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/categories', categories)
server.use('/api/items', items)
server.use('/api/orgs', orgs)
server.use('/api/joins', joinItemToOrgs)

server.post('/contact', function (req, res) {
  console.log(req.body)
  var api_key = process.env.MAILGUN_API_KEY
  var domain = process.env.MAILGUN_DOMAIN
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})
  var data = {
    from: 'green-wgtn <postmaster@sandbox0a4e694b934b4216950e110a444c5b62.mailgun.org>',
    to: 'team.hoppers.nz@gmail.com',
    subject: req.body.name + ' has submitted comments on green-wgtn',
    text: 'Name: ' + req.body.name + ' Email: ' + req.body.email + ' Comments: ' + req.body.comments
  }
  mailgun.messages().send(data, function (error, body) {
    console.log(body)
    if(!error)
      res.send('Thank you for your comment.')
    else {
      res.send('Sorry, your comment has not been sent.')
    }
  })
})

module.exports = server

var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

var categories = require('./routes/categories')
var items = require('./routes/itemClass')
var orgs = require('./routes/orgs')



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


module.exports = function(db) {
  server.set('db', db)
  return server
}

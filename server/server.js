var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')


var routes = require('./routes/index')
var categories = require('./routes/categories')


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

server.use('/api', routes)
server.use('/api/categories', categories)

module.exports = function(db) {
  server.set('db', db)
  return server
}

var app = require('./server')

var env = process.env.NODE_ENV || 'development'
var knex = require('knex')
var config = require('../knexfile')[env]

app.set('db', knex(config))

var PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

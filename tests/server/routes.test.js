
var test = require('ava')
var request = require('supertest')

var app = require('../../server/server.js')

var configureDatabase = require('./helpers/database-config')

configureDatabase(test, app)


//testing categories routes

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/categories')
    .expect(200)
    .end((err,res) => {
      t.deepEqual(res.body.length, 4)
      t.end()
    })
})

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/categories')
    .expect(200)
    .end((err,res) => {
      t.deepEqual(Object.keys(res.body).category_name)
      t.end()
    })
})

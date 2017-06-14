
var test = require('ava')
var request = require('supertest')

var app = require('../../server/server.js')

var configureDatabase = require('./helpers/database-config')

configureDatabase(test, app)

test.cb.skip('GET /', t => {
  request(t.context.app)
    .get('/api/')
    .expect(200)
    .end((err,res) => {
      t.deepEqual(Object.keys(res.body).length, 12)
      t.end()
    })
})

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/categories')
    .expect(200)
    .end((err,res) => {
      t.deepEqual(res.body.length, 4)
      t.end()
    })
})

// testing itemClass routes

test.cb('GET /items', t => {
  request(t.context.app)
    .get('/api/items')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 4)
      // t.is(res.body.itemClass_id, 77003)
      t.end()
    })
})


var test = require('ava')
var request = require('supertest')
var sinon = require('sinon')
var app = require('../../server/server.js')

var configureDatabase = require('./helpers/database-config')

configureDatabase(test, app)

// testing categories routes

test.cb('GET /categories', t => {
  request(t.context.app)
    .get('/api/categories')
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err)
      }
      t.deepEqual(res.body.length, 12)
      t.is(res.body[0].category_id, 88005)
      t.end()
    })
})

test.cb('GET /orgs', t => {
  request(t.context.app)
    .get('/api/orgs')
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err)
      }
      t.deepEqual(Object.keys(res.body).category_name)
      t.end()
    })
})

// testing itemClass routes

test.cb('GET /items', t => {
  request(t.context.app)
    .get('/api/items')
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err)
      }
      t.is(res.body.length, 27)
      t.is(res.body[0].itemClass_id, 77016)
      t.end()
    })
})

// testing join table routes

test.cb('GET /joins', t => {
  request(t.context.app)
    .get('/api/joins')
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err)
      }
      t.is(res.body[0].orgRelationships_id, 17)
      t.end()
    })
})

// testing contact form server route

test.cb('POST /contact', t => {
  var messagesStub = sinon.stub().callsFake((data, callback) => {
    callback()
  })
  var mailgunstub = () => {
    return {
      messages: () => {
        return {
          send: messagesStub
        }
      }
    }
  }
  t.context.app.set('mailgunjs', mailgunstub)
  request(t.context.app)
    .post('/contact')
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err)
      }
      t.is(messagesStub.called, true)
      t.end()
    })
})

test.cb('POST /contact with error message', t => {
  var messagesStub = sinon.stub().callsFake((data, callback) => {
    callback('fake error message')
  })
  var mailgunstub = () => {
    return {
      messages: () => {
        return {
          send: messagesStub
        }
      }
    }
  }
  t.context.app.set('mailgunjs', mailgunstub)
  request(t.context.app)
    .post('/contact')
    .expect(500)
    .end((err, res) => {
      if (err) {
        console.log(err)
      }
      t.is(messagesStub.called, true)
      t.end()
    })
})

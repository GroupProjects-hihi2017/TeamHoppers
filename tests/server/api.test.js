var test = require('ava')
var request = require('supertest')
var setUpDb = require('./helpers/database-config')

var db = require('../../server/db/categories')


setUpDb(test)


test('getCategories gets all categories', (t) => {
  return db.getCategories(t.context.db)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 4)
        resolve()
      })
    })
})

var test = require('ava')
var request = require('supertest')
var setUpDb = require('./helpers/database-config')

var categoriesDb = require('../../server/db/categories')
var itemClassDb = require('../../server/db/itemClass')


setUpDb(test)

// testing categories

test('getCategories gets all categories', (t) => {
  return categoriesDb.getCategories(t.context.db)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 4)
        resolve()
      })
    })
})

// testing itemClass

test('getItemClass gets all itemClasses', (t) => {
  return itemClassDb.getItemClass(t.context.db)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 4)
        resolve()
      })
    })
})

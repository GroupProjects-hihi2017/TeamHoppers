
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')
var config = require('./knexfile')[env]

var db = knex(config)

var fs = require('fs')
var csv = require('fast-csv')

var categories = []
fs.createReadStream('./categories.csv')
  .pipe(csv())
  .on('data', function (data) {
    categories.push({
      category_id: data[0],
      category_name: data[1],
      category_img: data[2],
      category_info: data[3]
    })
  })
  .on('end', function (data) {
    console.log(categories[0].category_name)
    db('categories').delete().then(() => {
      db('categories').insert(categories).then(() => {
        db('categories').select()
          .then((result) => {
            console.log(result.length)
            process.exit()
          })
      })
    })
  })

var orgs = []
fs.createReadStream('./orgs.csv')
  .pipe(csv())
  .on('data', function (data) {
    orgs.push({
      org_id: data[0],
      org_name: data[1],
      org_address: data[2],
      org_url: data[3],
      org_img: data[4],
      org_info: data[5],
      org_isDonatable: data[6]
    })
  })
  .on('end', function (data) {
    console.log(orgs[0].org_isDonatable)
    db('orgs').delete().then(() => {
      db('orgs').insert(orgs).then(() => {
        db('orgs').select()
          .then((result) => {
            console.log(result.length)
            process.exit()
          })
      })
    })
  })

var itemClass = []
fs.createReadStream('./itemClass.csv')
  .pipe(csv())
  .on('data', function (data) {
    itemClass.push({
      itemClass_id: data[0],
      category_id: data[1],
      itemClass_name: data[2],
      itemClass_info: data[3],
      itemClass_img: data[4]
    })
  })
  .on('end', function (data) {
    console.log(itemClass[0].itemClass_name)
    db('itemClass').delete().then(() => {
      db('itemClass').insert(itemClass).then(() => {
        db('itemClass').select()
          .then((result) => {
            console.log(result.length)
            process.exit()
          })
      })
    })
  })

var joinItemToOrgs = []
fs.createReadStream('./joinItemToOrgs.csv')
  .pipe(csv())
  .on('data', function (data) {
    joinItemToOrgs.push({
      orgRelationships_id: data[0],
      itemClass_id: data[1],
      org_id: data[2]
    })
  })
  .on('end', function (data) {
    console.log(joinItemToOrgs[0].orgRelationships_id)
    db('joinItemToOrgs').delete().then(() => {
      db('joinItemToOrgs').insert(joinItemToOrgs).then(() => {
        db('joinItemToOrgs').select()
          .then((result) => {
            console.log(result.length)
            process.exit()
          })
      })
    })
  })

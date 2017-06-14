var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var orgsDb = require('../../server/db/orgs')


test.skip('getOrgs lists all orgs', (t)=> {
    return orgsDb.getOrgs(t.context.connection)
    .then(function(results) {
      t.is(9, results.length)
    })
  })

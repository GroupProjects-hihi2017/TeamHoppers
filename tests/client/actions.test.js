import test from 'ava'
import nock from 'nock'

import * as action from '../../client/actions'
import * as orgAction from '../../client/actions/orgs'


test.cb.skip('getCategories', t => {
  const scope = nock('http://localhost:80')
    .get('/api/categories')
    .reply(200)

    action.getCategories()((actual) => {
      console.log(actual);
      t.is(actual.type, 'RECEIVE_CATEGORIES')
      t.end()
    })
})

test.cb('getOrgs', t => {
  const scope = nock('http://localhost:80')
    .get('/api/orgs')
    .reply(200)

    orgAction.getOrgs()((actual) => {
      t.is(actual.type, 'RECEIVE_ORGS')
      t.end()
    })
})

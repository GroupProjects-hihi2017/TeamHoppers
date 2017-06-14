import test from 'ava'
import nock from 'nock'

import * as action from '../../client/actions'


test.cb('getCategories', t => {
  const scope = nock('http://localhost:80')
    .get('/api/categories')
    .reply(200)

    action.getCategories()((actual) => {
      console.log(actual);
      t.is(actual.type, 'RECEIVE_CATEGORIES')
      t.end()
    })
})

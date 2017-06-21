import test from 'ava'
import nock from 'nock'
import sinon from 'sinon'

import * as orgAction from '../../client/actions/listOrgs'
import * as contactAction from '../../client/actions/contactForm'
import * as itemAction from '../../client/actions/items'
import * as categoriesAction from '../../client/actions/categories'
import * as joinsAction from '../../client/actions/joinItemToOrgs'

test.cb('getAllOrgs', t => {
  const scope = nock('http://localhost:80')
    .get('/api/orgs')
    .reply(200)

  orgAction.getAllOrgs()((actual) => {
    t.is(actual.type, 'LIST_ORGS')
    t.end()
  })
})

// test.cb('addOrg', t => {
//   const scope = nock('http://localhost:80')
//     .post('/api/orgs')
//     .reply(200)
//
//   const callback = sinon.stub()
//   orgAction.addOrg({}, callback)((actual) => {
//     t.is(actual.type, 'ADD_ORG')
//     t.true(callback.called)
//     t.end()
//   })
// })

test.cb('getItems', t => {
  const scope = nock('http://localhost:80')
    .get('/api/items')
    .reply(200)

  itemAction.getItems()((actual) => {
    t.is(actual.type, 'RECEIVE_ITEMS')
    t.end()
  })
})

test.cb('getCategories', t => {
  const scope = nock('http://localhost:80')
    .get('/api/categories')
    .reply(200)

  categoriesAction.getCategories()((actual) => {
    t.is(actual.type, 'RECEIVE_CATEGORIES')
    t.end()
  })
})

test.cb('getOrgsByItem', t => {
  const scope = nock('http://localhost:80')
    .get('/api/joins')
    .reply(200)

  joinsAction.getOrgsByItem()((actual) => {
    t.is(actual.type, 'RECEIVE_ORGS_BY_ITEM')
    t.end()
  })
})

test.cb('post contact form', t => {
  const scope = nock('http://localhost:80')
    .post('/contact')
    .reply(200)

  contactAction.postContactForm({}, (err, body) => {
    scope.done()
    t.pass()
    t.end()
  })
})

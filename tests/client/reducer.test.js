import test from 'ava'

import {getCategories} from '../../client/actions/categories'
import categories from '../../client/reducers/categories'

import {getItems} from '../../client/actions/items'
import items from '../../client/reducers/items'

import {getAllOrgs} from '../../client/actions/listOrgs'
import listOrgs from '../../client/reducers/listOrgs'

test('gets initialState', t => {
  const initialState = categories()
  t.is(initialState.length, 0)
})

test('Categories reducer works', t => {
  const initialState = []
  const nextState = categories(initialState, {type: 'RECEIVE_CATEGORIES', categories: [{}, {}, {}]})
  t.is(nextState.length, 3)
})

test('gets initialState', t => {
  const initialState = items()
  t.is(initialState.length, 0)
})

test('ItemClass reducer works', t => {
  const initialState = []
  const nextState = items(initialState, {type: 'RECEIVE_ITEMS', items: [{}, {}, {}]})
  t.is(nextState.length, 3)
})

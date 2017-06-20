import test from 'ava'
import React from 'react'
import nock from 'nock'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import './helpers/setup-dom'
import Categories from '../../client/containers/Categories'
import ItemClass from '../../client/containers/ItemClass'
import OrgClass from '../../client/containers/Orgs'
import store from '../../client/store'
import {receiveOrgsByItem} from '../../client/actions/joinItemToOrgs'

nock('http://localhost:80')
  .get('/api/categories').reply(200, [])
  .get('/api/joins').reply(200, [{itemClass_name: 'memes', itemClass_id: 77001}])
  .get('/api/items').reply(200, [])

test('categories page exists', t => {
  const wrapper = mount(<Categories store={store} />)
  t.is(wrapper.find('Categories').exists(), true)
})

test('items page exists', t => {
  const wrapper = mount(<ItemClass store={store}/>)
  t.is(wrapper.find('ItemClass').exists(), true)
})

test('orgs page exists', t => {
  const wrapper = mount(<OrgClass store={store} match={{params: {itemClass_id: 77001}}}/>)
  t.is(wrapper.find('OrgClass').exists(), true)
})

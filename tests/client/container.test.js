import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import './helpers/setup-dom'
import Categories from '../../client/containers/Categories'
import ItemClass from '../../client/containers/ItemClass'
import OrgClass from '../../client/containers/Orgs'
import store from '../../client/store'

ItemClass.prototype.componentDidMount = () => {}
OrgClass.prototype.componentDidMount = () => {}

test('categories page exists', t => {
  const wrapper = mount(<Categories store={store} />)
  t.is(wrapper.find('Categories').exists(), true)
})

test('items page exists', t => {
  const wrapper = mount(<ItemClass store={store}/>)
  t.is(wrapper.find('ItemClass').exists(), true)

})

test('orgs page exists', t => {
  const wrapper = mount(<OrgClass store={store}/>)
  t.is(wrapper.find('OrgClass').exists(), true)
})

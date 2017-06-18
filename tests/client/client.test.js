import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import App from '../../client/components/App'
import Home from '../../client/components/Home'
import About from '../../client/components/About'
import Header from '../../client/components/Header'

App.prototype.componentDidMount = () => {}

test('Home is rendering', t => {
  const wrapper = shallow(<Home store={store}/>)
  t.is(wrapper.find('.home').exists(), true)
})

test('About is rendering', t => {
  const wrapper = shallow(<About store={store}/>)
  t.is(wrapper.find('.about-header').exists(), true)
})

test('Header logo is rendering', t => {
  const wrapper = shallow(<Header store={store}/>)
  t.is(wrapper.find('.recycle').text(), 'recycle')
  t.is(wrapper.find('.hack').text(), 'hack')
})

import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import App from '../../client/components/App'


App.prototype.componentDidMount = () => {}

test('App is rendering', t =>  {
  const wrapper = shallow(<App store={store}/>)
  t.is(wrapper.find('.app-container').text(),'Team Hoppers for the win!')
})

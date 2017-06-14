import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import App from '../../client/components/App'


App.prototype.componentDidMount = () => {}

test.skip('The header renders on home page', t =>  {
  const wrapper = shallow(<Header store={store}/>)
  t.is(wrapper.find('.header-text').text(),'NETFLIX AND CHOW')
})

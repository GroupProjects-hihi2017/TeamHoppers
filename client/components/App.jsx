import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Nav from './Nav'
import Header from './Header'

import Orgs from '../containers/Orgs'
import ItemClass from '../containers/ItemClass'
import Categories from '../containers/Categories'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Nav />
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route exact path='/items' component={ItemClass} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/categories/:category_id' component={ItemClass} />

        ///Here is the route to where the orgs will list by item id ///
        <Route exact path='/categories/:category_id/:itemClass_id' component={Orgs} />
      </div>
    </Router>
  )
}

export default App

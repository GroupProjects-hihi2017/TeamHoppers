import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
// import Orgs from './Orgs'
import ItemClass from '../containers/ItemClass'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route exact path='/items' component={ItemClass} />
      </div>
    </Router>
  )
}

export default App

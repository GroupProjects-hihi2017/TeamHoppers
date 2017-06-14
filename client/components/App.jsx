import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import About from './About'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  )
}

export default App

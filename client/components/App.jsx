import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import GeneralInfo from './GeneralInfo'
import Nav from './Nav'
import Header from './Header'
import ContactForm from './ContactForm'
import Orgs from '../containers/Orgs'
import ItemClass from '../containers/ItemClass'
import ListAllOrgs from '../containers/ListAllOrgs'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/organisations' component={ListAllOrgs} />
        <Route exact path='/general-info' component={GeneralInfo} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={ContactForm} />
        <Route exact path='/categories/:category_id' component={ItemClass} />
        <Route exact path='/categories/:category_id/:itemClass_id' component={Orgs} />
      </div>
    </Router>
  )
}

export default App

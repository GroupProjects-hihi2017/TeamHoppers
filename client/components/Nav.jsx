import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Nav extends React.Component {

  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#mainNavBar'> &#9776;﻿</button>
          </div>
          <div className='collapse navbar-collapse' id='mainNavBar'>
            <ul className='nav navbar-nav'>
                <li><Link to={'/'} className='nav-item'>Home</Link></li>
                <li><Link to={'/organisations'} className='nav-item'>Wellington Organisations</Link></li>
                <li><Link to={'/general-info'} className='nav-item'>General Info</Link></li>
                <li><Link to={'/about'} className='nav-item'>About</Link></li>
                <li><Link to={'/contact'} className='nav-item'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Nav

import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header' id="header">
      <div className='container'>
        <div className='header-text'>
          <a href='/' style={{color: '#fff'}}>
            <span className='recycle'>recycle</span>
            <span className='hack'>hack</span>
          </a>
        </div>
        <Link to={'/admin'}>
          <img className='header-img' src='images/recyclehack_logo.jpg'/>
        </Link>
      </div>
    </div>
  )
}

export default Header

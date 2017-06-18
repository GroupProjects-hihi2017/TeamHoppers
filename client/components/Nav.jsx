import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
      <header className = 'container'>
        <nav>
          <Link to="#" className="menu-icon">&#9776;</Link>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/organisations'}>Wellington Organisations</Link></li>
            <li><Link to={'/general-info'}>General Info</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </header>
  )
}


export default Nav

import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className = 'container'>
    <nav className="mobile-menu">
      <label for="show-menu" className="show-menu"><span>Menu</span><div className="lines"></div></label>
      	<input type="checkbox" id="show-menu" />
      		<ul id="menu">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/organisations'}>Wellington Organisations</Link></li>
            <li><Link to={'/general-info'}>General Info</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
      	</ul>
    </nav>
  </div>
  )
}


export default Nav

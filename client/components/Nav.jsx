import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>Home</Link>
      <Link to={'/organisations'}>Wellington Organisations</Link>
      <Link to={'#'}>General Info</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Nav

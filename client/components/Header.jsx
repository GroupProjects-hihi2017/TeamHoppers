import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-text'>
          <a href='/' style={{color: "#fff"}}>
          <span className='recycle'>recycle</span>
          <span className='hack'>hack</span>
          </a>
        </div>
          <Link to={'/general-info'}>
            <img className='header-img' src='http://www.koehlerdramm.com/wp-content/uploads/2016/04/happy-earth-day-2016-1024x427.jpg'/>
          </Link>
      </div>
    </div>
  )
}

export default Header

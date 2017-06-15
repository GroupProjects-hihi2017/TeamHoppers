import React from 'react'

import Nav from './Nav'
import Categories from '../containers/Categories'

const Home = () => {
  return (
    <div>
      <div className='homepage'>
        <h1>Go Green!</h1>
      </div>
      <Nav />
      <Categories />
    </div>
  )
}

export default Home

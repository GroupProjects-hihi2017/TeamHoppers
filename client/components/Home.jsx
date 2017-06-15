import React from 'react'

import Categories from '../containers/Categories'
import SearchBar from '../containers/SearchBar'

const Home = () => {
  return (
    <div className='home'>
      <SearchBar />
      <Categories />
    </div>
  )
}

export default Home

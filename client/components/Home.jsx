import React from 'react'
import jump from 'jump.js'

import Categories from '../containers/Categories'
import SearchBar from '../containers/SearchBar'

class Home extends React.Component {
  scrollToEntries (e) {
    jump('.category-list-header', {
      offset: -50
    })
  }

  render () {
    return (
      <div className='home'>
        <SearchBar />
        <div className='container'>
          <div className='row'>
            <h2 className='downArrow'><img src='images/arrow-down.png' width='70px' onClick={(e) => this.scrollToEntries(e)} /></h2>
          </div>
        </div>
        <hr className='orange-hr' />
        <Categories/>
      </div>
    )
  }
}

export default Home

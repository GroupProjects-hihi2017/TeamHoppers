import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions/categories'
import {Link} from 'react-router-dom'

const renderCategory = (category, key) => (
  <div className="category-box" key={key}>
    <Link to={`/categories/${category.category_id}`}>
      <figure>
        <img src={`${category.category_img}`}/>
        <figcaption><h5>{category.category_name}</h5>
          <p>{category.category_info}</p>
        </figcaption>
      </figure>
      <p className='category-title-media'>{category.category_name}</p>
    </Link>
  </div>
)

class Categories extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    const {categories} = this.props
    return (
      <div className='wallpaper-no-border'>
        <div className='container category-grid-container'>
          <div className="category-list-header">
            <h4>Explore Sustainability</h4>
          </div>
          <div className='categories-container'>
            {categories.map((category, key) => renderCategory(category, key))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(Categories)

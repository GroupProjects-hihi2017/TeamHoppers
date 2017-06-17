import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions/categories'
import {Link} from 'react-router-dom'

const renderCategory = (category, key) => (






  <div className="category-box" key={key}>
    <div className='grid'>
      <Link to={`/categories/${category.category_id}`}>
        <figure>
          <img src={`${category.category_img}`}/>
          <figcaption><h4 className="figcaption">{category.category_name}</h4>
          <p>{category.category_info}</p></figcaption>
        </figure>
      </Link>
    </div>
  </div>
)










class Categories extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
    // this.props.dispatch(getItems())
  }

  render () {
    const {categories, dispatch} = this.props
    return (
      <div>
        <div className="category-list-header">
          <h4>Categories</h4>
        </div>
        <div className='categories-container container'>
          <div>
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

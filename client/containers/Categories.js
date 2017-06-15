
import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions/categories'

const renderCategory = (category, key) => (
  <div className='category-box four columns' key={key}>
       <img src={`${category.category_img}`}/>
       <h4 className="category-name">{category.category_name}</h4>
       <p className="category-info">{category.category_info}</p>
   </div>
)

const Categories = ({categories, dispatch}) => (
  <div className = 'categories-container container'>
    <div>
      <h4 className="category-list-header">Categories</h4>
    </div>
    <div>
      {dispatch(getCategories())}
      {categories.map((category, key) => renderCategory(category, key))}
    </div>
  </div>
  )

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(Categories)

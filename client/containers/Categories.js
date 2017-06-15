
import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions/categories'

const renderCategory = (category, key) => (
  <div key={key}>
       <img src={`${category.category_img}`}/>
       <h2>{category.category_name}</h2>
       <h4>{category.category_info}</h4>
   </div>
)

const Categories = ({categories, dispatch}) => (
  <div className = 'categoriesContainer'>
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


import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions/categories'
import {getItems} from '../actions/items'
import {Link} from 'react-router-dom'

const renderCategory = (category, key) => (

  <div key={key}>
    <Link to={`/categories/${category.category_id}`}>
      <img src={`${category.category_img}`}/>
      <h2>{category.category_name}</h2>
    </Link>
    <h4>{category.category_info}</h4>
  </div>
)


class Categories extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
    // this.props.dispatch(getItems())
  }


render() {
  const {categories, dispatch} = this.props
    console.log(this.props);
  return (
    <div className='categoriesContainer'>
      <div>
        <h4 className="category-list-header">Categories</h4>
      </div>
      <div>
        {categories.map((category, key) => renderCategory(category, key))}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  console.log(state);
  return {categories: state.categories}
}

export default connect(mapStateToProps)(Categories)


import React from 'react'
import {connect} from 'react-redux'

import {getCategories} from '../actions/categories'
import {getItems} from '../actions/items'
import {Link} from 'react-router-dom'

const renderCategory = (category, key) => (

  <div className="category-box four columns" key={key}>
    <Link to={`/categories/${category.category_id}`}>
      <img src={`${category.category_img}`}/>
      <h4 className="category-name">{category.category_name}</h4>
    </Link>
    <p className="category-info">{category.category_info}</p>
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
    <div className='container'>
      <div>
        <h4 className="category-list-header">Categories</h4>
      </div>
      <div className='categories-container' >
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

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getItems} from '../actions/items'

const renderItemClass = (itemClass, key) => (

  <div className='itemClass-box 3 columns' key={key}>
    <Link to={`/categories/${itemClass.category_id}/${itemClass.itemClass_id}`}>
      <img src={`${itemClass.itemClass_img}`}/>
      <h4 className="itemClass-name">{itemClass.itemClass_name}</h4>
    </Link>
    <p className="itemClass-info">{itemClass.itemClass_info}</p>
  </div>
)

class ItemClass extends React.Component {
  componentDidMount () {
    this.props.dispatch(getItems())
  }

  render () {
    const {itemClass} = this.props
    console.log(this.props);
    return (
      <div className='container'>
        <div className="itemClass-list-header">
          <h4>{this.props.category_name}</h4>
        </div>
        <div className='container'>
          <div className= 'itemClass-container'>
            {itemClass.map((item, key) => renderItemClass(item, key))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, otherProps) => {
  const items = state.items.filter((item) => {
    return item.category_id == otherProps.match.params.category_id
  })
  return {itemClass: items}
}

export default connect(mapStateToProps)(ItemClass)

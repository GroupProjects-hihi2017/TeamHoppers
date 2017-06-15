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
    const {itemClass, dispatch} = this.props
    return (
      <div className='itemClass-container container'>
        <div>
          <h4 className="itemClass-list-header">Items</h4>
        </div>
        <div>
          {itemClass.map((item, key) => renderItemClass(item, key))}
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

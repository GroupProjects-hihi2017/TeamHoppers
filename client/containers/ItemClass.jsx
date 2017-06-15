import React from 'react'
import {connect} from 'react-redux'

import {getItems} from '../actions/items'

const renderItemClass = (itemClass, key) => (
  <div key={key}>
    <p>{itemClass.itemClass_name}</p>
  </div>
)

const ItemClass = ({itemClass, dispatch}) => (
  <div>
    <h3>All items</h3>
    {dispatch(getItems())}
    {items.map(renderItemClass)}
  </div>
)

const mapStateToProps = (state) => {
  return {itemClass: state.itemClass}
}

export default connect(mapStateToProps)(ItemClass)

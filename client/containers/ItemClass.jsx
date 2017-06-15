import React from 'react'
import {connect} from 'react-redux'

import {getItems} from '../actions/items'

const renderItemClass = (itemClass, key) => (
  <div key={key}>

      <img src={`${itemClass.itemClass_img}`}/>
      <h2>{itemClass.itemClass_name}</h2>
  
    <h4>{itemClass.itemClass_info}</h4>
  </div>
)

class ItemClass extends React.Component {
  componentDidMount() {
    this.props.dispatch(getItems())
  }


render() {
  const {itemClass, dispatch} = this.props
  return (
    <div className='itemClassContainer'>
      <div>
        <h4 className="itemClass-list-header">Items</h4>
      </div>
      <div>
        {itemClass.map((item, key) => renderItemClass(item, key))}
      </div>
    </div>
  )}
}

const mapStateToProps = (state, otherProps) => {
  const items = state.items.filter((item) => {
    return item.category_id == otherProps.match.params.category_id
  })
  console.log(otherProps);
  return {itemClass: items}
}

export default connect(mapStateToProps)(ItemClass)

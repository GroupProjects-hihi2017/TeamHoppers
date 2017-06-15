
import React from 'react'
import {connect} from 'react-redux'

import {getOrgsByItem} from '../actions/joinItemToOrgs'
import {Link} from 'react-router-dom'


const renderItemInfo = (item, key) => (

  <div className="category-box four columns" key={key}>
    <ul>
      <li>{item.itemClass_name}</li>
    </ul>
  </div>
)


class SearchBar extends React.Component {
  componentDidMount() {
    this.props.dispatch(getOrgsByItem())
  }


render() {
  const {joinItemToOrgs, dispatch} = this.props
    console.log(this.props.joinItemToOrgs);
  return (
    <div className='container'>
      <div>
        <h4 className="category-list-header">Categories</h4>
      </div>
      <div className='categories-container' >
        {joinItemToOrgs.map((item, key) => renderItemInfo(item, key))}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  console.log(state);
  return {joinItemToOrgs: state.joinItemToOrgs}
}

export default connect(mapStateToProps)(SearchBar)

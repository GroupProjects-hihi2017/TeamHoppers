
import React from 'react'
import {connect} from 'react-redux'

import {getOrgsByItem} from '../actions/joinItemToOrgs'
import {Link} from 'react-router-dom'


const renderItemInfo = (item, key) => (
  <div className="category-box four columns" key={key}>

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
        <h4 className="search-bar-header">What would you like to recycle?</h4>
      </div>
      <form>
        <input placeholder='Search' type='text'></input>
      </form>
      <div className='categories-container' >
        {joinItemToOrgs.map((item, key) => renderItemInfo(item, key))}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {joinItemToOrgs: state.joinItemToOrgs}
}

export default connect(mapStateToProps)(SearchBar)

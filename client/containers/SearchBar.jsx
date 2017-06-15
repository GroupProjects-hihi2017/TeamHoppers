
import React from 'react'
import {connect} from 'react-redux'

import {getOrgsByItem} from '../actions/joinItemToOrgs'
import {Link} from 'react-router-dom'


const renderItemInfo = (item, key) => (
  <div className="search-result" key={key}>
    <ul>
      <li>{item.itemClass_name}</li>
    </ul>
  </div>
)


class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchItem: '',
      searchResults: [],
      showMoreItems: false
    }
  }

  componentDidMount() {
    this.props.dispatch(getOrgsByItem())
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(e){
    this.setState({searchItem: e.target.value, searchResults: this.filterSearchItems(e.target.value, this.state.showMoreItems)})
  }
  showMoreItemsToggle(boolean) {
    this.setState({showMoreItems: !boolean})
    this.setState({searchResults: this.filterSearchItems(this.state.searchItem, !boolean)})
  }

  filterSearchItems(searchTerm, showMore){
    if (searchTerm == '' || !searchTerm) return []
    let searchResults = this.props.joinItemToOrgs.filter((item) => {
      return item.itemClass_name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    if (showMore) return searchResults
    else return searchResults.slice(0, 4)
  }

render() {
  const {joinItemToOrgs, dispatch} = this.props
  return (
    <div className='container'>
      <div>
        <h4 className="search-bar-header">What would you like to recycle?</h4>
      </div>
      <form>
        <input placeholder='Search' type='text' onChange={(e) => this.searchHandler(e)}></input>
      </form>
      <div className='categories-container' >
        <button onClick={() => this.showMoreItemsToggle(this.state.showMoreItems)}>{this.state.showMoreItems ? "Show Less" : "Show More"}</button>
        {this.state.searchResults.map((item, key) => renderItemInfo(item, key))}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {joinItemToOrgs: state.joinItemToOrgs}
}

export default connect(mapStateToProps)(SearchBar)

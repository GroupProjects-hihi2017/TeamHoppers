
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import SearchResults from './SearchResults'
import {getItems} from '../actions/items'


const renderItemInfo = (item, key) => (
  <div className="search-result" key={key}>
    <button>{item.itemClass_name}</button>
  </div>
)


class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchItem: '',
      searchResults: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getItems())
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(e){
    this.setState({searchItem: e.target.value, searchResults: this.filterSearchItems(e.target.value)})
  }

  filterSearchItems(searchTerm){
    if (searchTerm == '' || !searchTerm) return []
    return this.props.items.filter((item) => {
      return item.itemClass_name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

render() {
  const {itemClass, dispatch} = this.props
  return (
    <div className='container'>
      <div>
        <h4 className="search-bar-header">What would you like to recycle?</h4>
      </div>
      <form>
        <input placeholder='Search' type='text' onChange={(e) => this.searchHandler(e)}></input>
      </form>
        {this.state.searchResults.map((item, key) => renderItemInfo(item, key))}
    </div>
  )}
}

const mapStateToProps = (state, other) => {
  return {items: state.items}
}

export default connect(mapStateToProps)(SearchBar)

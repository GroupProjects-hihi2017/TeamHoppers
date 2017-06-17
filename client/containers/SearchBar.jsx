
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import SearchResults from './SearchResults'
import Categories from '../containers/Categories'
import {getItems} from '../actions/items'
import {getOrgsByItem} from '../actions/joinItemToOrgs'



class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: props.items,
      joinItemToOrgs: props.joinItemToOrgs,
      searchItem: '',
      searchResults: [],
      showOrgs: false,
      sortedOrgs: []
    }
  }


  showOrg(selectedItem){
    let sortedOrgs = this.state.joinItemToOrgs.filter((item) => {
      return item.itemClass_id == selectedItem.itemClass_id
    })
    this.setState({sortedOrgs, showOrgs: true})
  }
  renderOrgs() {
    return (
    <div>
      <h5>You can take this item to:</h5>
      <SearchResults orgs={this.state.sortedOrgs}/>
    </div>
    )
  }

  componentDidMount() {
    this.props.dispatch(getItems())
    this.props.dispatch(getOrgsByItem())
    this.searchHandler = this.searchHandler.bind(this)
  }


  searchHandler(e){
    this.setState({
      searchItem: e.target.value,
      searchResults: this.filterSearchItems(e.target.value),
      showOrgs: false,
      sortedOrgs: []
    })
  }
  componentWillReceiveProps({joinItemToOrgs, items}) {
    this.setState({joinItemToOrgs, items})
  }
  filterSearchItems(searchTerm){
    if (searchTerm == '' || !searchTerm) return []
    return this.state.items.filter((item) => {
      return item.itemClass_name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }
 renderItemInfo(item, key) {
    return <div className="search-result" key={key}>
      <button onClick={() => this.showOrg(item)}>{item.itemClass_name}</button>
    </div>
  }

render() {
  const {itemClass, dispatch} = this.props
  return (
    <div className='container search-bar-body'>
      <div>
        <h4 className="search-bar-header">What would you like to recycle?</h4>
      </div>
      <form className='search-box'>
        <input placeholder='Search' type='text' onChange={(e) => this.searchHandler(e)}></input>
      </form>
      <div className='search-results-list'>
        {this.state.searchResults.map((item, key) => this.renderItemInfo(item, key))}
      </div>
        {this.state.showOrgs && this.renderOrgs()}

    </div>
  )}
}

const mapStateToProps = (state, other) => {
  return {items: state.items,
    joinItemToOrgs: state.joinItemToOrgs
    }
}

export default connect(mapStateToProps)(SearchBar)

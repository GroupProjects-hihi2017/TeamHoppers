import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getOrgsByItem} from '../actions/joinItemToOrgs'

const renderSearchResults = (result, key) => (
  <div key={key}>
      <p className="itemClass-name">{result.org_name}</p>
      <p className="itemClass-info">{result.org_info}</p>
  </div>
)

class SearchResults extends React.Component {
  componentDidMount () {
    this.props.dispatch(getOrgsByItem())
  }

  render () {
    const {joinItemToOrgs, dispatch} = this.props
    console.log(this.props);
    return (
        <div>
          {this.props.joinItemToOrgs.map((result, key) => renderSearchResults(result, key))}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {joinItemToOrgs: state.joinItemToOrgs}
}

export default connect(mapStateToProps)(SearchResults)

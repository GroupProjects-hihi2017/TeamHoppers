import React from 'react'
import {connect} from 'react-redux'

import {getOrgsByItem} from '../actions/joinItemToOrgs'

const renderSearchResults = (result, key) => (

  <div key={key} className='search-results-orgs-box'>
    <a href={result.org_url} target="_blank"><img className="results-org-logo" src={result.org_img} /></a>
    <p className="org-name">{result.org_name}</p>
    <p className="org-info">{result.org_info}</p>
  </div>
)

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orgs: props.orgs
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({orgs: nextProps.orgs})
  }
  componentDidMount () {
    this.props.dispatch(getOrgsByItem())
  }

  render () {
    return (
      <div>
        {this.state.orgs.map((result, key) => renderSearchResults(result, key))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {joinItemToOrgs: state.joinItemToOrgs}
}

export default connect(mapStateToProps)(SearchResults)

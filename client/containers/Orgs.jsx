import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getOrgsByItem} from '../actions/joinItemToOrgs'
import {orgs} from '../actions/orgs'

const renderOrgClass = (orgs, key) => (

  <div className='itemClass-box 3 columns' key={key}>
    <Link to={`/categories/:category_id/${joinItemToOrgs.itemClass_id}/${joinItemToOrgs.org_id}`}>
      <img src={`${orgs.org_img}`}/>
      <h4 className="itemClass-name">{orgs.org_name}</h4>
    </Link>
    <p className="itemClass-info">{orgs.org_info}</p>
    <p className="itemClass-info">{orgs.org_url}</p>
    <p className="itemClass-info">{orgs.org_address}</p>
    <p className="itemClass-info">{orgs.org_location}</p>
  </div>
)

class OrgClass extends React.Component {
  componentDidMount() {
    this.props.dispatch(getOrgs())
  }


render() {
  const {orgClass, dispatch} = this.props
  return (
    <div className='itemClass-container container'>
      <div>
        <h4 className="itemClass-list-header">Organisations</h4>
      </div>
      <div>
        {orgClass.map((orgs, key) => renderOrgClass(orgs, key))}
      </div>
    </div>
  )}
}

const mapStateToProps = (state, otherProps) => {
  const orgs = state.orgs.filter((org) => {
    return joinItemToOrgs.itemClass_id == otherProps.match.params.itemClass_id
  })
  console.log(otherProps);
  return {joinItemToOrgs: orgs}
}

export default connect(mapStateToProps)(OrgClass)

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import GMapLocate from './GMapLocate'


import {getOrgsByItem} from '../actions/joinItemToOrgs'

const renderOrgClass = (org, key) => (

  <div className='itemClass-box 3 columns' key={key}>
    <img src={`${org.org_img}`}/>
    <p><a href={org.org_url} target="_blank">{org.org_name}</a></p>
    {renderMap(org)}
    <p className="itemClass-info">{org.org_info}</p>
    <p className="itemClass-info">Address: {org.org_address}</p>
    <p className="itemClass-info">{org.org_location}</p>
  </div>

)

const renderMap = (org) => {
  return <div className='map'>
    <GMapLocate address={org.org_address}/>
  </div>
}

class OrgClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: props.item || {itemClass_name: '...'},
      donateAble: props.donateAble,
      recycleAble: props.recycleAble
    }
  }
  componentDidMount () {
    this.props.dispatch(getOrgsByItem())
  }


  componentWillReceiveProps ({item, recycleAble, donateAble}) {
    this.setState({
      item,
      donateAble,
      recycleAble
    })
  }
  renderOrgList(orgs) {
    if (orgs != 0) {
      return (
        <div className="donate-able">
          <h5>You can {orgs[0].isDonatable ? 'Donate' : 'Recycle'} here:</h5>
          {orgs.map((org, key) => renderOrgClass(org, key))}
        </div>
      )
    }
  }
  render () {
    let {recycleAble, donateAble} = this.state
    return (
    <div className = 'wallpaper-no-border'>
      <div className='container'>
        <div>
          <h5 className="itemClass-list-header">The following organisations will take your {this.state.item.itemClass_name}:</h5>
        </div>
        <div className='itemClass-container '>
          {this.renderOrgList(recycleAble)}
          {this.renderOrgList(donateAble)}
        </div>
      </div>
    </div>
    )
  }
}

const filterDonate = (orgs, isDonatable) => {
  return orgs.filter(org => org.isDonatable == isDonatable)
}

const mapStateToProps = ({joinItemToOrgs}, {match}) => {
  let {itemClass_id} = match.params
  const orgs = joinItemToOrgs.filter(org => org.itemClass_id == itemClass_id)
  const donateAble = filterDonate(orgs, true)
  const recycleAble = filterDonate(orgs, false)
  const item = joinItemToOrgs.find(item => item.itemClass_id == itemClass_id)
  return {joinItemToOrgs: orgs, item, donateAble, recycleAble}
}

export default connect(mapStateToProps)(OrgClass)

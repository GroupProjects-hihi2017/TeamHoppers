import React from 'react'
import {connect} from 'react-redux'

import GMapLocate from './GMapLocate'
import {getOrgsByItem} from '../actions/joinItemToOrgs'

const renderOrgClass = (org, key) => (

  <div className='itemClass-box 3 columns' key={key}>
    <img src={`${org.org_img}`}/>
    <p><a href={org.org_url} target="_blank">{org.org_name}</a></p>
    {renderMap(org)}
    <p className="itemClass-info">{org.org_info}</p>
    <p className="itemClass-info">Address: {org.org_address}</p>
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
  renderOrgList (orgs) {
    if (orgs != 0) {
      return (
        <div className="donate-able">
          <h5>{orgs[0].org_isDonatable ? 'Donate' : 'Recycle'} here:</h5>
          {orgs.map((org, key) => renderOrgClass(org, key))}
        </div>
      )
    }
  }

render() {
  let {recycleAble, donateAble} = this.state
  let itemClass_name = this.state.item
    ? this.state.item.itemClass_name
    : ''
  return (
    <div className='wallpaper-no-border'>
        <div className='itemClass-container '>
          <div className="itemClass-list-header">
            <h1>The Following Organisations Will Take Your {itemClass_name}:</h1>

          </div>
          <div className='itemClass-content'>
            {this.renderOrgList(recycleAble)}
            {this.renderOrgList(donateAble)}

          </div>

        </div>

    </div>
  )
}

}

const filterDonate = (orgs, isDonatable) => {
  return orgs.filter(org => org.org_isDonatable == isDonatable)
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

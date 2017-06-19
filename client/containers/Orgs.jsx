import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getOrgsByItem} from '../actions/joinItemToOrgs'

const renderOrgClass = (joinItemToOrgs, key) => (

  <div className='itemClass-box 3 columns' key={key}>
    <img src={`${joinItemToOrgs.org_img}`}/>
    <p><a href={joinItemToOrgs.org_url} target="_blank">{joinItemToOrgs.org_name}</a></p>
    <p className="itemClass-info">{joinItemToOrgs.org_info}</p>
    <p className="itemClass-info">Address: {joinItemToOrgs.org_address}</p>
    <p className="itemClass-info">{joinItemToOrgs.org_location}</p>
  </div>
)

class OrgClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      donateAble: this.filterDonate(props.joinItemToOrgs, true),
      recycleAble: this.filterDonate(props.joinItemToOrgs, false)
    }
  }
  componentDidMount () {
    this.props.dispatch(getOrgsByItem())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      donateAble: this.filterDonate(nextProps.joinItemToOrgs, true),
      recycleAble: this.filterDonate(nextProps.joinItemToOrgs, false)
    })
  }
  filterDonate(orgs, isDonatable) {
    return orgs.filter(org => org.isDonatable == isDonatable)
  }
  render () {
    return (
      <div className='container'>
        <div>
          <h5 className="itemClass-list-header">The following organisations will take your items:</h5>
        </div>
        <div className='itemClass-container '>
          {this.state.donateAble.length != 0 &&
            <div className="donate-able">
              <h1>Donate</h1>
              {this.state.donateAble
                .map((orgs, key) => renderOrgClass(orgs, key))
              }
            </div>
          }
          {this.state.recycleAble.length != 0 &&
            <div className="recycle-able">
              <h1>Recycle</h1>
              {this.state.recycleAble
                .map((orgs, key) => renderOrgClass(orgs, key))
              }
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, otherProps) => {
  const orgs = state.joinItemToOrgs.filter((org) => {
    return org.itemClass_id == otherProps.match.params.itemClass_id
  })
  return {joinItemToOrgs: orgs}
}

export default connect(mapStateToProps)(OrgClass)

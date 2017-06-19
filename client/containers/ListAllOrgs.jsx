import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getAllOrgs} from '../actions/listOrgs'
import {getOrgsByItem} from '../actions/joinItemToOrgs'
import ItemsByOrg from './ItemsByOrg'
import OrgSingle from '../components/OrgSingle'

class ListAllOrgs extends React.Component {
  componentDidMount () {
    this.props.dispatch(getAllOrgs())
    this.props.dispatch(getOrgsByItem())
  }

  render () {
    const {listOrgs, joinItemToOrgs} = this.props
    return (
      <div className=' container'>
        <div className='org-container'>
          <div className='org-header'>
            <h4>Consider recycling or donating your used items at any of these Wellington organisations:</h4>
            <p>Want your organisation listed on our site? Get in touch with us <Link to='/contact'>here</Link>.</p>
          </div>
          <div className='org-link-list'>
            {listOrgs.map((org, key) => <OrgSingle org={org} key={key}/>)}
          </div>
        </div>
      </div>
    )
  }
}



function mapStateToProps(state) {
  console.log(state);
  return {
    listOrgs: state.listOrgs,
    joinItemToOrgs: state.joinItemToOrgs
  }
}

export default connect(mapStateToProps)(ListAllOrgs)

import React from 'react'
import {connect} from 'react-redux'

import {getAllOrgs} from '../actions/listOrgs'
import {Link} from 'react-router-dom'

const renderAllOrgs = (org, key) => {
  console.log(org);
  return (
    <div className="" key={key}>
      <h4 className="org-name">{org.org_name}</h4>
    </div>
  )
}

class ListAllOrgs extends React.Component {
  componentDidMount () {
    this.props.dispatch(getAllOrgs())
  }

  render () {
    const {orgs} = this.props
    console.log({orgs});
    return (
      <div className=''>
        <div>
          <h4 className=''>Wellington Organisations</h4>
        </div>
        <div>
          {orgs.map((org, key) => renderAllOrgs(org, key))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {orgs: state.orgs}
}

export default connect(mapStateToProps)(ListAllOrgs)

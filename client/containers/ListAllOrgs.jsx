import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getAllOrgs} from '../actions/listOrgs'

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
    const {listOrgs, dispatch} = this.props
    console.log(this.props.listOrgs);
    return (
      <div className=''>
        <div>
          <h4 className=''>Wellington Organisations</h4>
        </div>
        <div>
          {listOrgs.map((org, key) => renderAllOrgs(org, key))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {listOrgs: state.listOrgs}
}

export default connect(mapStateToProps)(ListAllOrgs)

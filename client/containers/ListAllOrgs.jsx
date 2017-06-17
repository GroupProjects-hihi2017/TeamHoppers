import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getAllOrgs} from '../actions/listOrgs'

const renderAllOrgs = (org, key) => {
  return (
    <div className="" key={key}>
      <Link to={`/organisations/${org.org_id}`}>
        <h4 className="org-name">{org.org_name}</h4>
      </Link>
    </div>
  )
}

class ListAllOrgs extends React.Component {
  componentDidMount () {
    this.props.dispatch(getAllOrgs())
  }

  render () {
    const {listOrgs} = this.props
    return (
      <div className='container'>
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
  return {listOrgs: state.listOrgs}
}

export default connect(mapStateToProps)(ListAllOrgs)

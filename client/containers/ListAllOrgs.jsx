import React from 'react'
import jump from 'jump.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getAllOrgs} from '../actions/listOrgs'

const renderAllOrgs = (org, key) => {
  return (
    <div className='org-box' key={key}>
      <Link to={`/organisations/${org.org_id}`}>
        <img className='org-logo' src={org.org_img} onClick={(e) => this.scrollToEntries(e)}/>
        <h4 className="org-name">{org.org_name}</h4>
      </Link>
    </div>
  )
}

class ListAllOrgs extends React.Component {
  componentDidMount () {
    this.props.dispatch(getAllOrgs())
  }

  scrollToEntries (e) {
    jump('.org-item-list', {
      offset: -50
    })
  }

  render () {
    const {listOrgs} = this.props
    return (
      <div className='container'>
        <div className='org-header'>
          <h4>Consider recycling or donating your used items at any of these Wellington organisations:</h4>
          <p>Want your organisation listed on our site? Get in touch with us <Link to='/contact'>here</Link>.</p>
        </div>
        <div className='org-link-list'>
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

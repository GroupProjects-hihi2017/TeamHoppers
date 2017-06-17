import React from 'react'
import {connect} from 'react-redux'

import {getOrgsByItem} from '../actions/joinItemToOrgs'

const renderAllItemsByOrg = (joinItemToOrgs, key) => (

  <div className='' key={key}>
    <div>
      <ul>
        <li>{joinItemToOrgs.itemClass_name}</li>
      </ul>
    </div>
  </div>
)

class ItemsByOrg extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      joinItemToOrgs: props.joinItemToOrgs
    }
  }
  componentDidMount () {
    this.props.dispatch(getOrgsByItem())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({joinItemToOrgs: nextProps.joinItemToOrgs})
  }
  
  render () {
    return (
      <div className='itemClass-container container'>
        <div>
          {this.state.joinItemToOrgs.map((items, key) => renderAllItemsByOrg(items, key))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, otherProps) => {
  const items = state.joinItemToOrgs.filter((item) => {
    return item.org_id == otherProps.match.params.org_id
  })
  return {joinItemToOrgs: items}
}

export default connect(mapStateToProps)(ItemsByOrg)

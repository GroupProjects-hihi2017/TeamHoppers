import React from 'react'
import {connect} from 'react-redux'

import {listItemsByOrg} from '../actions/listItemsByOrg'

const renderAllItemsByOrg = (joinItemToOrgs, key) => (

  <div className='' key={key}>
    <div>
      <h4>List of all items collected by this Organisation</h4>
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
    this.props.dispatch(listItemsByOrg())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({joinItemToOrgs: nextProps.joinItemToOrgs})
  }
  render () {
    return (
      <div className='itemClass-container container'>
        <div>
          <h4 className="itemClass-list-header">Items collected by [insert name of Organisation]</h4>
        </div>
        <div>
          {this.state.joinItemToOrgs.map((items, key) => renderAllItemsByOrg(items, key))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, otherProps) => {
  console.log(otherProps);
  const items = state.joinItemToOrgs.filter((item) => {
    return item.org_id == otherProps.match.params.org_id
  })
  return {joinItemToOrgs: items}
}

export default connect(mapStateToProps)(ItemsByOrg)

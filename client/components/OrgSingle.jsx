import React from 'react'
import {connect} from 'react-redux'

class OrgSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      org: props.org,
      items: this.filterItems(props.joinItemToOrgs),
      showItems: false
    }
  }
  filterItems(items) {
    return items.filter(item => item.org_id == this.state.org.org_id)
  }
  componentWillReceiveProps({org, joinItemToOrgs}) {
    this.setState({org, items: this.filterItems(joinItemToOrgs)})
  }
  handleClick(showItems) {
    this.setState({showItems})
    this.props.dispatch({type: 'INIT'})
  }
  render() {
    let {org, items, showItems} = this.state
    return (
      <div className="org-single">
        <div className="org-details">
          <img className='org-logo' src={org.org_img}/>
            {items.length != 0 && <button onClick={ () => this.handleClick(!showItems) }>{org.org_name}</button>}
        </div>
        {this.state.showItems && (
          <div className="ItemsByOrg">
            {items.map((item, key) => {
              console.log({item});
              return (
                <div className="ItemsByOrg" key={key}>
                  <p>{item.itemClass_name}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, nextProps) => {
  return {
    joinItemToOrgs: state.joinItemToOrgs
  }
}

export default connect (mapStateToProps)(OrgSingle)

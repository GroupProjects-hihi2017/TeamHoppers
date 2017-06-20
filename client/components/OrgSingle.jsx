import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
    return items.filter(item => item.org_id == this.props.org.org_id)
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
      <div className="org-single-box">
        <div className="org-details">
          <img className='org-logo' src={org.org_img}/>
            <div><button onClick={ () => this.handleClick(!showItems) }>{org.org_name}</button></div>
        </div>
        {this.state.showItems && (
          <div className='items-by-org-grid'>
            {items.map((item, key) => {
              return (
                <div className="items-by-org" key={key}>
                  <Link to={`/categories/${item.category_id}/${item.itemClass_id}`}>{item.itemClass_name}</Link>
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

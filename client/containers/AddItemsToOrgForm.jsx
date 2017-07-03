import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getAllOrgs} from '../actions/listOrgs'
import {addItemJoin} from '../actions/joinItemToOrgs'

class AddItemsToOrgForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dispatch: props.dispatch,
      itemJoin: {},
      submitted: false,
      message: ''
    }
  }

  componentDidMount () {
    this.props.dispatch(getAllOrgs())
  }

  handleChange (e) {
    let org = this.state.listOrg
    org[e.target.name] = e.target.value
    this.setState({org})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.state.dispatch(addItemJoin(this.state.itemJoin))
    this.setState({submitted: true, message: 'Your organisation has been updated.'})
  }

  refreshForm () {
    this.setState({itemJoin: {}, submitted: false, message: ''})
  }

  renderMessage () {
    return <div>
      <Link to={`/organisations`}><h4 className="submit-message">{this.state.message}</h4></Link>
      <button onClick={(e) => this.refreshForm()}>Start New Form</button>
    </div>
  }

  renderForm () {
    return (
      <form className='admin-form' onSubmit={(e) => this.handleSubmit(e)}>
        <h4>Update Organisation</h4>
        <hr className='orange-hr' />
        <p>Please select your Organisation and then update the relevant fields:</p>
        <div className="add-org">
          <select className="drop-menu" name="name" value="name" onChange={(e) => this.handleChange(e)}>
            {this.props.listOrgs.map((org, key) => {
              return <option value={org.org_id}>{org.org_name}</option> })}
          </select>
          <button class="btn" type="submit">Submit</button>
        </div>
      </form>
    )
  }

  render () {
    return (
      <div className = 'wallpaper-no-border'>
        <div className='container form'>
          {this.state.submitted ? this.renderMessage() : this.renderForm() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {joinItemToOrgs: state.joinItemToOrgs, listOrgs: state.listOrgs}
}

export default connect(mapStateToProps)(AddItemsToOrgForm)

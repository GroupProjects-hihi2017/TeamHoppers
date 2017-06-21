import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {addOrg} from '../actions/listOrgs'

class AdminForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dispatch: props.dispatch,
      org: {org_isDonatable: true},
      submitted: false,
      message: ''
    }
  }

  toggleDonatable (e) {
    let org = this.state.org
    org.org_isDonatable = !org.org_isDonatable
    this.setState({org})
  }

  handleChange (e) {
    let org = this.state.org
    org[e.target.name] = e.target.value
    this.setState({org})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.state.dispatch(addOrg(this.state.org))
    this.setState({submitted: true, message: 'Your organisation has been submitted.'})
  }

  refreshForm () {
    this.setState({submitted: false, message: '', org: {org_isDonatable: true}})
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
        <h4>Add an organisation</h4>
        <hr className='orange-hr' />
        <p>Please enter the information of the organisation you would like to add to the database:</p>
        <label className="labelone" htmlFor="name"> Organisation Name: </label>
        <input type='text' id='org_name' name='org_name' onChange={(e) => this.handleChange(e)} />
        <label className="labelone" htmlFor="name"> Organisation Address: </label>
        <input type='text' id='org_address' name='org_address' onChange={(e) => this.handleChange(e)} />
        <label className="labelone" htmlFor="name"> Organisation Homepage URL: </label>
        <input type='text' id='org_url' name='org_url' onChange={(e) => this.handleChange(e)} />
        <label className="labelone" htmlFor="name"> Organisation Logo: </label>
        <input type='text' id='org_img' name='org_img' onChange={(e) => this.handleChange(e)} />
        <label className="labelone" htmlFor="name"> Description of Organisation: </label>
        <textarea name="comments" name='org_info' onChange={(e) => this.handleChange(e)} />
        <div className="add-org">
          <p className="donate-or-recycle">{this.state.org.org_isDonatable ? "This organisation takes donations." : "This organisation recycles."}</p>
          <button className="btn" type="submit" onClick={(e) => this.toggleDonatable(e)} value="Click to Choose Donate or Recycle"> Click to Choose Donate or Recycle</button><br/>
          <button className="btn" type='submit' id='submit' value='Submit New Organisation'>Submit New Organisation</button>
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

export default connect()(AdminForm)

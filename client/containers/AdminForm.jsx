import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {Link} from 'react-router-dom'

import {addOrg} from '../actions/listOrgs'
import {getAllOrgs} from '../actions/listOrgs'

class AdminForm extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       org: {},
       submitted: false,
       message: ''
     }
   }

   componentDidMount () {
     this.props.dispatch(getAllOrgs())
   }

   handleChange(e) {
     let org = this.state.org
     org[e.target.name] = e.target.value
     this.setState({org})
   }

   handleSubmit(e) {
     e.preventDefault()
     this.props.dispatch(addOrg(this.state.org))
     this.setState({submitted: true, message: 'Your organisation has been submitted.'})
   }
   refreshForm() {
     this.setState({submitted: false, message: '', org: {}})
   }
   renderMessage() {
     return <div>
       <Link to={`/organisations`}><h4 className="submit-message">{this.state.message}</h4></Link>
       <button onClick={(e) => this.refreshForm()}>Start New Form</button>
     </div>
   }
   renderForm() {
     return (
       <form className='admin-form'>
        <h4>Please enter the information of the organisation you would like to add to the database:</h4>
        <input type='text' id='org_name' name='org_name' placeholder='Organisation Name' onChange={(e) => this.handleChange(e)} />
        <input type='text' id='org_address' name='org_address' placeholder='Organisation Address' onChange={(e) => this.handleChange(e)} />
        <input type='text' id='org_url' name='org_url' placeholder='Organisation Homepage URL' onChange={(e) => this.handleChange(e)} />
        <input type='text' id='org_img' name='org_img' placeholder="Link to Organisation's Logo" onChange={(e) => this.handleChange(e)} />
        <input type='text' name='org_info' placeholder="Description of Organisation" onChange={(e) => this.handleChange(e)} />
        <input type='text' name='org_location' placeholder="Organisation's Google Coordinates" onChange={(e) => this.handleChange(e)} />
        <input className="submit" type='submit' id='submit' value='Submit New Organisation' onClick={(e) => this.handleSubmit(e)} />
       </form>
     )
   }
   render () {
     return (
       <div className='container'>
         {this.state.submitted ? this.renderMessage() : this.renderForm() }
       </div>
     )}
 }

const mapStateToProps = (state) => {
return {org: state.org, listOrgs: state.listOrgs}
}

export default connect(mapStateToProps)(AdminForm)

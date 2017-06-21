import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {Link} from 'react-router-dom'

import {getAllOrgs} from '../actions/listOrgs'
import {addItemJoin} from '../actions/joinItemToOrgs'

class AddItemsToOrgForm extends React.Component {
  constructor(props) {
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

   handleChange(e) {
     let org = this.state.listOrg
     org[e.target.name] = e.target.value
     this.setState({org})
   }

   handleSubmit(e) {
     e.preventDefault()
     this.state.dispatch(addItemJoin(this.state.itemJoin))
     this.setState({submitted: true, message: 'Your organisation has been submitted.'})
   }

   refreshForm() {
     this.setState({itemJoin: {}, submitted: false, message: '',})
   }

   renderMessage() {
     return <div>
       <Link to={`/organisations`}><h4 className="submit-message">{this.state.message}</h4></Link>
       <button onClick={(e) => this.refreshForm()}>Start New Form</button>
     </div>
   }

   renderForm() {
     return (
       <div className='container'>
         <h3>Update Organisation</h3>
         <form className='items-to-org-form' onSubmit={(e)=>this.handleSubmit(e)}>
          <label>Choose the organisation you would like update:</label>
            <select className="drop-menu" name="name" value="name" onChange={(e) => this.handleChange(e)}>
              {this.props.listOrgs.map((org, key) => {
                return <option value={org.org_id}>{org.org_name}</option> })}
            </select>
            <label>Select the items this organisation will accept:</label>
          <input className="submit" type='submit' id='submit' value='Submit Updates' />
         </form>
       </div>
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
   return {joinItemToOrgs: state.joinItemToOrgs, listOrgs: state.listOrgs}
 }

export default connect(mapStateToProps)(AddItemsToOrgForm)

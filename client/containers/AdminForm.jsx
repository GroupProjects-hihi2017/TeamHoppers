import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {addOrg} from '../actions/listOrgs'

class AdminForm extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       org: {}
     }
   }

   handleChange(e) {
     let org = this.state.org
     org[e.target.name] = e.target.value
     this.setState({org})
   }

   handleSubmit(e) {
     e.preventDefault()
     this.props.dispatch(addOrg(this.state.org))
     this.setState({org: {}})
   }

   render () {
     return (
       <div className='container'>
         <div className='admin-form'>
          <h4>Please enter the information of the organisation you would like to add to the database:</h4>
            <select className="drop-menu" name="org_name" value={this.state.category_name} onChange={(e =>this.handleChange(e))}>
              console.log(this.state);
              <option value="Cakes and Tortes">Cakes and Tortes</option>
            </select>
          <input type='text' id='org_name' name='org_name' placeholder='Organisation Name' onChange={(e) => this.handleChange(e)} />
          <input type='text' id='org_address' name='org_address' placeholder='Organisation Address' onChange={(e) => this.handleChange(e)} />
          <input type='text' id='org_url' name='org_url' placeholder='Organisation Homepage URL' onChange={(e) => this.handleChange(e)} />
          <input type='text' id='org_img' name='org_img' placeholder="Link to Organisation's Logo" onChange={(e) => this.handleChange(e)} />
          <input type='text' name='org_info' placeholder="Description of Organisation" onChange={(e) => this.handleChange(e)} />
          <input type='text' name='org_location' placeholder="Organisation's Google Coordinates" onChange={(e) => this.handleChange(e)} />
          <input className="submit" type='submit' id='submit' value='Submit New Organisation' onClick={(e) => this.handleSubmit(e)} />
         </div>
       </div>
     )}
 }

const mapStateToProps = (state) => {
return {org: state.org, listOrgs: state.listOrgs}
}

export default connect(mapStateToProps)(AdminForm)

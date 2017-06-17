import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {postContactForm} from '../actions/contactForm'

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {}
    }
  }

  updateFormDetails (e) {
    let form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({form})
  }

  submitForm (e) {
    e.preventDefault()
    this.props.dispatch(postContactForm(this.state.form))
    this.props.history.push('/')
  }

  render () {
    return (
      <form className="contact-form" onSubmit={(e) => this.submitForm(e)}>
        <fieldset>
          <h4>Contact us</h4>
          <label className="labelone" htmlFor="name">Name: </label>
          <input name="name" onChange={(e) => this.updateFormDetails(e)}/>
          <label htmlFor="email">Email: </label>
          <input name="email" onChange={(e) => this.updateFormDetails(e)} />
          <label htmlFor="comments">Comments: </label>
          <textarea name="comments" onChange={(e) => this.updateFormDetails(e)}></textarea>
        </fieldset>
        <fieldset>
          <input className="btn" type="submit" value="Send message" />
          <input className="btn" type="reset" value="Reset form" />
        </fieldset>
      </form>
    )
  }
}

export default connect()(ContactForm)

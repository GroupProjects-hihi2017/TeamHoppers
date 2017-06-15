import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <fieldset>
          <h4>Contact us</h4>
          <label className="labelone" htmlFor="comments">Name: </label>
          <input name="name" />
          <label htmlFor="email">Email: </label>
          <input name="email" />
          <label htmlFor="comments">Comments: </label>
          <textarea name="comments"></textarea>
        </fieldset>
        <fieldset>
          <input className="btn" type="submit" value="Send message" />
          <input className="btn" type="reset" value="Reset form" />
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm

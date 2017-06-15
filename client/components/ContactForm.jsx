import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <fieldset>
          <h4>Contact us</h4>
          <label className="labelone" for="comments">Name: </label>
          <input name="name" />
          <label for="email">Email: </label>
          <input name="email" />
          <label for="comments">Comments: </label>
          <textarea name="comments"></textarea>
        </fieldset>
        <fieldset>
          <input class="btn" type="submit" value="Send message" />
          <input class="btn" type="reset" value="Reset form" />
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm

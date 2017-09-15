import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="note">Text:</label>
        <Field name="note" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};

ContactForm = reduxForm({
  form: 'create_note'
})(ContactForm);

export default ContactForm;
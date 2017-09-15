import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CreateNoteForm = props => {
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
        <Field name="note" component="textarea" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};

CreateNoteForm = reduxForm({
  form: 'create_note'
})(CreateNoteForm);

export default CreateNoteForm;
import React from 'react'
import CreateNoteForm from './CreateNoteForm'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as ActionTypes from "../constants/actionTypes";

import {push } from 'react-router';

class CreateNote extends React.Component {
  static propTypes = {
    createNote: PropTypes.func.isRequired,
  };


  submit = (values) => {
    console.log(values);
    this.props.createNote(values);
    // this.props.history.push('/');
  };
  render() {
    return (
      <CreateNoteForm onSubmit={this.submit} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createNote: (values) => dispatch({
    type: ActionTypes.CREATE_NOTE,
    payload: {
      title : values.title || '(no title)',
      text : values.note || '',
      author : {
        name: values.name || 'Anonymous',
        email: values.email || '',
      }
    }}),
});

export default connect(undefined, mapDispatchToProps)(CreateNote);

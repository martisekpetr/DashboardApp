import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import * as ActionTypes from '../constants/actionTypes'
import * as dashboardSelectors from '../selectors/dashboardSelector'


class Note extends React.Component {
  static propTypes = {
    note: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
    loadNote: PropTypes.func.isRequired,
  };


  componentWillMount() {
    const noteId = this.props.match.params.id;
    this.props.loadNote(noteId);
  }

  render() {
    return !this.props.note ? <div>Loading...</div> : (
      <div>
        <Link to="/">Back to list</Link>
        <h3>{this.props.note.title}</h3>
        <p>
          {this.props.note.text}
          <br />
          ({this.props.note.author.name}, {this.props.note.author.email})
        </p>
      </div>

    )
  }
}


const mapStateToProps = state => ({
  note: dashboardSelectors.getNote(state),
});

const mapDispatchToProps = dispatch => ({
  loadNote: (noteId) => dispatch({type: ActionTypes.LOAD_NOTE, payload: noteId}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);


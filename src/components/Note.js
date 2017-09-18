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
    if (!this.props.note) {
      return <div>Loading...</div>;
    } else {
      const {title, text, author} = this.props.note;
      return (
        <div>
          <Link to="/">Back to list</Link>
          <h3>{title}</h3>
          <p>
            {text}
            <br/>
            ({author.name}, {author.email})
          </p>
        </div>
      )
    }
  }
}


const mapStateToProps = state => ({
  note: dashboardSelectors.getNote(state),
});

const mapDispatchToProps = dispatch => ({
  loadNote: (noteId) => dispatch({type: ActionTypes.LOAD_NOTE, payload: noteId}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);


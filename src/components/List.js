import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as ActionTypes from '../constants/actionTypes.js'
import * as dashboardSelectors from '../selectors/dashboardSelector'

import { getPreview } from '../utils/notePreview'
class List extends React.Component {
  static propTypes = {
    dashboard: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),

  };

  componentWillMount(){
    this.props.loadDashboard();
  }

  render(){
    return !this.props.dashboard ? <div>Loading...</div> : (
      <div>
        <h1>{this.props.dashboard.name}</h1>

        {this.props.dashboard.notes.map(note =>
            <p key={note.id}>
              <Link to={`/note/${note.id}`} key={note.id}>
                <strong>{note.title} ({note.author}):</strong> {getPreview(note.text, 5)}
              </Link>
            </p>
        )}
        <p key="create_note">
          <Link to={`/create/`} key="create_note">
            Create note
          </Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dashboard: dashboardSelectors.getDashboard(state),
});


const mapDispatchToProps = dispatch => ({
  loadDashboard: () => dispatch({type: ActionTypes.LOAD_DASHBOARD}),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
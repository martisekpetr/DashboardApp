import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as ActionTypes from '../constants/actionTypes.js'
import {loadDashboard} from "../sagas/dashboardSaga";

import * as dashboardSelectors from '../selectors/dashboardSelector'


class List extends React.Component {
  static propTypes = {
    dashboard: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),

  };

  componentWillMount(){
    loadDashboard();
  }

  render(){
    return !this.props.dashboard ? <div>Loading.</div> : (
      <div>
        <h1>{this.props.dashboard.name}</h1>

        {this.props.dashboard.notes.map(
          note =>
            <p>
              <Link to={`/note/${note.id}`} key={note.id}>
                <strong>{note.title} ({note.author}):</strong> {note.text}
              </Link>
            </p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dashboard: dashboardSelectors.getDashboard(state),
});


const mapDispatchToProps = dispatch => ({
  loadDashboard: dispatch({type: ActionTypes.LOAD_DASHBOARD}),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
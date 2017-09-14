import React from 'react'
import { Link } from 'react-router-dom'

class Note extends React.Component {

  render(){
    return (
      <div>
        <Link to="/">Back to list</Link>
        <h3>Note name</h3>
        <p>
          Note
        </p>
      </div>

    )
  }
}

export default Note;
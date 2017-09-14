import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import List from './List'
import Note from './Note'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={List}/>
          <Route path="/note/:id" component={Note}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

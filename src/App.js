import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

const App = (props) => (
  <Router>
    <div>
      <Route path='/:a/:b' render={({match}) => (
        <h1>
          paramA: {match.params.a}<br />
          paramB: {match.params.b}
        </h1>
      )} />
    </div>
  </Router>
)

export default App

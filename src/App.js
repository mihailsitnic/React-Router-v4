import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

const Links = () => {
  return(
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Header />
      <Content />
    </nav>
  )
}

const Header = ({match}) => (
  <header className="header">
    <Route
      path='/:page'
      render={({match}) => (
        <h1>{match.params.page} header</h1>
      )} />
  </header>
)

const Content = ({match}) => (
  <section className="content">
    <Route
      path='/:page'
      render={({match}) => (
        <p>{match.params.page} content</p>
      )} />
  </section>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
    </div>
  </Router>
)

export default App

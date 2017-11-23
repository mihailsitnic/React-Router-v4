import React from 'react';
import {BrowserRouter as Router, Route, Link, BrowserRouter, HashRouter, MemoryRouter, StaticRouter, NativeRouter} from 'react-router-dom';
import './App.css';


const LinkRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
)

const forceRefresh = () => {
  console.log(new Date())
  return false
}

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinkRoutes />
  </BrowserRouter>
)

const HashRouterApp = () => (
  <BrowserRouter hashType="hashbang">
    <LinkRoutes />
  </BrowserRouter>
)

const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={0}
    >
    <LinkRoutes />
  </MemoryRouter>
)

const StaticRouterApp = () => (
  <StaticRouter location="/about" context={{}}>
    <LinkRoutes />
  </StaticRouter>
)

export default StaticRouterApp

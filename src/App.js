import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Welcome from './components/welcome'
import Work from './components/work'
import Contact from './components/contact'
import About from './components/about'
import NavBar from './components/nav'

class App extends Component {
  render() {

    return <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Fragment>
  }
}

export default withRouter(App);

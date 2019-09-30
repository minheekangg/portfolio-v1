import React, { Component, Fragment } from 'react';
import './App.scss';
// import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Welcome from './components/welcome'
import Projects from './components/projects/projects'
import Contact from './components/contact'
import About from './components/about'
import NavBar from './components/nav'

class App extends Component {
  render() {

    return (
      <Fragment>
        <NavBar />
        <Welcome />
        <div className="maxwidth-page">
          <About />
          <Projects/>
          <Contact/>
        </div>
        {/* <Switch>
          <Route exact path="/" render={() => <Redirect to="/welcome" />} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch> */}
      </Fragment>
      )
  }
}

export default App;
// export default withRouter(App);

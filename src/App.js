import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';
import ListingContainer from './containers/ListingContainer';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn'

class App extends Component {
  
  render() {
    return (
      <Router>
        <NavBar />
     
        <Switch>
          <Route exact path = "/" component = {ListingContainer} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;

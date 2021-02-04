import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNotLoggedInNavBar from './components/MyNotLoggedInNavBar';
import ListingContainer from './containers/ListingContainer';
import UserContainer from './containers/UserContainer';

class App extends Component {
  
  render() {
    return (
      <Router>
        <MyNotLoggedInNavBar />
     
        <Switch>
          <Route exact path = "/" component = {ListingContainer} />
          <Route exact path="/signup" render  = {(routerProps) => <UserContainer {...routerProps} />}/>
          <Route exact path="/login" component= {UserContainer} />
          <Route exact path="/myprofile" component={UserContainer} />

        </Switch>
      </Router>
    );
  }
}

export default App;

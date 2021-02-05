import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNotLoggedInNavBar from './components/MyNotLoggedInNavBar';
import ListingContainer from './containers/ListingContainer';
import UserContainer from './containers/UserContainer';
import {connect} from 'react-redux'
import {fetchListings} from './actions/fetchListings'
import MyProfileContainer from './containers/MyProfileContainer'


class App extends Component {
  componentDidMount(){
    this.props.fetchListings()
}

  render() {
    return (
      <Router>
        <MyNotLoggedInNavBar />
     
        <Switch>
          <Route exact path = "/" component = {ListingContainer} />
          <Route exact path="/signup" render  = {(routerProps) => <UserContainer {...routerProps} />}/>
          <Route exact path="/login" component= {UserContainer} />
          <Route exact path="/myprofile" component={MyProfileContainer} />

        </Switch>
      </Router>
    );
  }
}

export default connect(null, {fetchListings})(App);

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNotLoggedInNavBar from './components/MyNotLoggedInNavBar';
import MyLoggedInNavBar from './components/MyLoggedInNavBar';
import ListingContainer from './containers/ListingContainer';
import UserContainer from './containers/UserContainer';
import {connect} from 'react-redux'
import {fetchListings} from './actions/fetchListings'
import MyProfileContainer from './containers/MyProfileContainer'
import {fetchLoggedInUser} from './actions/fetchUser'
import {logOutUser} from './actions/userAction'



class App extends Component {
  componentDidMount(){
    this.props.fetchListings()
    this.props.fetchLoggedInUser()
}

logOut = ()=>{
  localStorage.removeItem("token")
  this.props.logOutUser()
  alert("Succefully log out!")
}


  render() {
    return (
      <Router>
        {this.props.login? <MyLoggedInNavBar logOut = {this.logOut} /> : <MyNotLoggedInNavBar />}
     
        <Switch>
          <Route exact path = "/" component = {ListingContainer} />
          <Route exact path="/signup" render  = {(routerProps) => <UserContainer {...routerProps} />}/>
          <Route exact path="/login" component= {UserContainer} />
          <Route exact path="/myprofile" render  = {(routerProps) => <MyProfileContainer {...routerProps} />}/>

        </Switch>
      </Router>
    );
  }
}

export default connect(state=>({login : state.user.login}), {fetchListings, fetchLoggedInUser, logOutUser})(App);

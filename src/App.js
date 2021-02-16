import React, { Component } from 'react';
import {
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
import  Listing  from './components/Listing'

import {Container} from 'react-bootstrap'



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
      <Container>   
      {this.props.login? <MyLoggedInNavBar logOut = {this.logOut} /> : <MyNotLoggedInNavBar />}
  

      <div style = {{marginTop: '20px'}}>
      <Switch>
       
       <Route exact path = "/" component = {ListingContainer} />
       <Route path = {`/listings/:listingId`} render = {routerProps => <Listing {...routerProps} />} />
       <Route exact path="/signup" render  = {(routerProps) => <UserContainer {...routerProps} />}/>
       <Route exact path="/login" component= {UserContainer} />
       <Route path="/myprofile" render  = {() =>( (this.props.login) ? (<MyProfileContainer/>) : (<ListingContainer />))}/>
       {/* <Route exact path = '/myprofile' render = {()=> <MyProfileContainer />} /> */}


     </Switch>
      </div>
      
   </Container>

     
    );
  }
}

export default connect(state=>({login : state.user.login}), {fetchListings, fetchLoggedInUser, logOutUser})(App);

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchListings } from "./actions/fetchListings";
import MyProfileContainer from "./containers/MyProfileContainer";
import { fetchLoggedInUser } from "./actions/fetchUser";
import { logOutUser } from "./actions/userAction";
import Listing from "./components/Listing";
import MyNotLoggedInNavBar from "./components/MyNotLoggedInNavBar";
import MyLoggedInNavBar from "./components/MyLoggedInNavBar";
import HomepageContainer from "./containers/HomepageContainer";
import UserAuthContainer from "./containers/UserAuthContainer";
import PrivateRoute from "./components/PrivateRoute";


class App extends Component {
  componentDidMount() {
    this.props.fetchListings();
    this.props.fetchLoggedInUser();
  }

  logOut = () => {
    localStorage.removeItem("token");
    this.props.logOutUser();
    alert("Succefully log out!");
  };

  render() {
   
    return (
      <div className="mainContainer">
        {this.props.login ? (
          <MyLoggedInNavBar logOut={this.logOut} />
        ) : (
          <MyNotLoggedInNavBar />
        )}

       
        <div style={{ marginTop: "20px" }}>
          <Switch>
            <Route exact path="/" component={HomepageContainer} />
            <Route
              path={`/listings/:listingId`}
              render={(routerProps) => <Listing {...routerProps} />}
            />
            <Route
              exact
              path="/signup"
              render={(routerProps) => <UserAuthContainer {...routerProps} />}
            />
            <Route exact path="/login" component={UserAuthContainer} />
            <PrivateRoute
              path="/myprofile"
              login={this.props.login}
              component={MyProfileContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ login: state.user.login, user: state.user }), {
  fetchListings,
  fetchLoggedInUser,
  logOutUser,
})(App);

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
import ListingContainer from "./containers/ListingContainer";
import UserContainer from "./containers/UserContainer";

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

        {/* listing container/listing/userauth container/login user profile container */}
        <div style={{ marginTop: "20px" }}>
          <Switch>
            <Route exact path="/" component={ListingContainer} />
            <Route
              path={`/listings/:listingId`}
              render={(routerProps) => <Listing {...routerProps} />}
            />
            <Route
              exact
              path="/signup"
              render={(routerProps) => <UserContainer {...routerProps} />}
            />
            <Route exact path="/login" component={UserContainer} />
            <Route
              path="/myprofile"
              render={() =>
                this.props.login ? <MyProfileContainer /> : <ListingContainer />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ login: state.user.login }), {
  fetchListings,
  fetchLoggedInUser,
  logOutUser,
})(App);

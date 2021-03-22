import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PropertiesContainer from "./PropertiesContainer";
import UserListingsContainer from "./UserListingsContainer";

import Sidebar from "../components/Sidebar";
import PropertyInput from "../components/PropertyInput";
import PropertyShowPage from "../components/PropertyShowPage";
import ListingInput from "../components/ListingInput";
import Listing from "../components/Listing";

class MyProfileContainer extends Component {
  render() {
    return (
      <>
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="content">
        <Switch>
              <Route
                exact
                path={`${this.props.match.url}/properties/new`}
                component={PropertyInput}
              />

              <Route
                exact
                path={`${this.props.match.url}/properties`}
                render={(routerProps) => (
                  <PropertiesContainer
                    {...routerProps}
                    user={this.props.user.user}
                  />
                )}
              />
              <Route
                exact
                path={`${this.props.match.url}/listings`}
                component = {UserListingsContainer}
              />

              <Route
                path={`${this.props.match.url}/properties/:propertyId/listings/new`}
                component={ListingInput}
              />
              <Route
                path={`${this.props.match.url}/properties/:propertyId/listings/:listingId`}
                render={(routerProps) => <Listing {...routerProps} />}
              />
              <Route
                path={`${this.props.match.url}/properties/:propertyId`}
                render={(routerProps) => (
                  <PropertyShowPage
                    {...routerProps}
                    user={this.props.user}
                    properties={this.props.user.user.properties}
                  />
                )}
              />
            </Switch> 
        </div>
      </>
    );
  }
}


export default connect((state) => ({ user: state.user }))(MyProfileContainer);

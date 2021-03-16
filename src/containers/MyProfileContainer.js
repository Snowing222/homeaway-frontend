import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PropertiesContainer from "./PropertiesContainer";
import UserListingsContainer from "./UserListingsContainer";
import { Row, Col, Container } from "react-bootstrap";

import Sidebar from "../components/Sidebar";
import PropertyInput from "../components/PropertyInput";
import PropertyShowPage from "../components/PropertyShowPage";
import ListingInput from "../components/ListingInput";
import Listing from "../components/Listing";

class MyProfileContainer extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col ListingInput={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>

          <Col lg={10} id="page-content-wrapper">
            <Switch>
              <Route
                exact
                path="/myprofile/properties/new"
                component={PropertyInput}
              />

              <Route
                exact
                path="/myprofile/properties"
                render={(routerProps) => (
                  <PropertiesContainer
                    {...routerProps}
                    user={this.props.user.user}
                  />
                )}
              />
              <Route
                exact
                path="/myprofile/listings"
                component = {UserListingsContainer}
              />

              <Route
                path="/myprofile/properties/:propertyId/listings/new"
                component={ListingInput}
              />
              <Route
                path="/myprofile/properties/:propertyId/listings/:listingId"
                render={(routerProps) => <Listing {...routerProps} />}
              />
              <Route
                path="/myprofile/properties/:propertyId"
                render={(routerProps) => (
                  <PropertyShowPage
                    {...routerProps}
                    user={this.props.user}
                    properties={this.props.user.user.properties}
                  />
                )}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect((state) => ({ user: state.user }))(MyProfileContainer);

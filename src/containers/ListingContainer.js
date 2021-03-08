import React, { Component } from "react";
import { connect } from "react-redux";
import { CardDeck } from "react-bootstrap";

import Listings from "../components/Listings";
import ListingSearch from "../components/ListingSearch";

class ListingContainer extends Component {
  render() {
    return (
      <div>
        <ListingSearch />

        <CardDeck style={{ padding: "30px" }}>
          <Listings listings={this.props.listings} />
        </CardDeck>
      </div>
    );
  }
}

export default connect((state) => ({ listings: state.listings }))(
  ListingContainer
);

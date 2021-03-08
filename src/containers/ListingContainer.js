import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Listings from "../components/Listings";

class ListingContainer extends Component {
  render() {
    return (
      <CardDeck style={{ padding: "30px" }}>
        <Listings listings={this.props.listings} />
      </CardDeck>
    );
  }
}

export default ListingContainer;

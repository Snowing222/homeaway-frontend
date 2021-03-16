import React, { Component } from "react";
import { connect } from "react-redux";


import ListingSearch from "../components/ListingSearch";
import ListingContainer from './ListingContainer'

class HomepageContainer extends Component {
  render() {
    return (
      <div>
        <ListingSearch />
        <ListingContainer listings = {this.props.listings}/>
        
      </div>
    );
  }
}

export default connect((state) => ({ listings: state.listings }))(
  HomepageContainer
);

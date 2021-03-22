import React from "react";
import { connect } from "react-redux";
import { Image, Button } from "react-bootstrap";
import "../css/listing.css";
import { deleteListing } from "../actions/fetchListings";

const Listing = ({ match, listings, history, user, deleteListing }) => {
  let listing = listings.find(
    (listing) => listing.id === parseInt(match.params.listingId)
  );

  const handleOnClick = () => {
    deleteListing(listing.id, history);
  };

  if (listing) {
    return (
      <div className="listing">
        <h1 className="center">{listing.title}</h1>
        <div>
          <Image src={listing.property.photo_src} fluid />
        </div>
        <div className="alignImg">
          <p>{listing.property.description}</p>
          <p>
            Host by: {listing.user.name}{" "}
            <Button href={`mailto:${listing.user.email}`} variant="info">Contact Owner</Button>
          </p>
          <p>
            {listing.property.bedroom_number} bedrooms -{" "}
            {listing.property.bathroom_number} bathrooms - Host up to{" "}
            {listing.property.guest_number} guests
          </p>
          <p>
            Address: {listing.property.address} - State:{" "}
            {listing.property.state} - Zipcode :{listing.property.zipcode}
          </p>
          <p>
            Available from {listing.avail_date_begin} to{" "}
            {listing.avail_date_end} for {listing.avail_period} days
          </p>
          {listing.rent_mode && <p>Rent for ${listing.price} per day </p>}
          {listing.trade_mode ? "" : "Not"} accept trade
          {listing.strict_mode ? "" : "Not"} negotiable
          <br />
          <br />
          {user.login && listing.user.id === user.user.id ? (
            <Button variant="danger" onClick={handleOnClick}>
              {" "}
              Delete{" "}
            </Button>
          ) : null}
        </div>
      </div>
    );
  } else {
    return <div>No listing match</div>;
  }
};

export default connect(
  (state) => ({ listings: state.listings, user: state.user }),
  { deleteListing }
)(Listing);

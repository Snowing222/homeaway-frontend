import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Image } from "cloudinary-react";
import { Button } from "react-bootstrap";
import { deleteProperty } from "../actions/fetchProperties";
import { connect } from "react-redux";

const PropertyShowPage = ({
  match,
  properties,
  history,
  user,
  deleteProperty,
}) => {
  let property = properties.find(
    (property) => property.id === parseInt(match.params.propertyId)
  );

  const handleOnClick = () => {
    deleteProperty(property.id, history);
  };

  if (property) {
    return (
      <div>
        <Image cloudName="xue" publicId={property.photo_src}></Image>

        <div className="alignImg">
          <h1>
            {property.address} - {property.state} - {property.zipcode}
          </h1>
          <p>{property.description}</p>
          <p>
            {property.bedroom_number} bedrooms - {property.bathroom_number}{" "}
            bathrooms
          </p>
          <p>host up to {property.guest_number} guest</p>
          <hr />
          <h4>All active listings</h4>
          {property.listings.length > 0 ? (
            <ul>
              {property.listings.map((listing) => (
                <Link
                  to={`${match.url}/listings/${listing.id}`}
                  key={listing.id}
                  style={{ display: "block" }}
                >
                  {listing.title}
                </Link>
              ))}
            </ul>
          ) : (
            <p> No active listing</p>
          )}

          {user.login && property.user_id === user.user.id ? (
            <Button variant="danger" onClick={handleOnClick}>
              {" "}
              Delete{" "}
            </Button>
          ) : null}

          <hr />

          <h4>
            {" "}
            <NavLink
              style={{ fontWeight: "normal", color: "black" }}
              to={`${match.url}/listings/new`}
            >
              {" "}
              + Create a new listing
            </NavLink>
          </h4>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default connect(null, { deleteProperty })(PropertyShowPage);

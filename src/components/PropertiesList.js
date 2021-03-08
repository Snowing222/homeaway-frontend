import React from "react";
import PropertyCard from "./PropertyCard";

const PropertiesList = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesList;

import React from "react";
import { NavLink } from "react-router-dom";
import { CardDeck, Card } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";


// const PropertiesContainer = ({ user,match }) => {

//   return (

//     <div>
//     <div id="sidebar">
//       <Sidebar />
//     </div>
//     <div id="content">
//     <CardDeck>
//         {user.user.properties.map((property) => (
//           <PropertyCard key={property.id} property={property} />
//         ))}

//         <Card style={{ textAlign: "center" }} className="col-md-3">
//           <NavLink style={{ paddingTop: "180px" }} to={`${match.url}/new`}>
//             {" "}
//             + List a new property
//           </NavLink>
//         </Card>
//       </CardDeck>
//     </div>
//   </div>
   
 
//   );
// };

const PropertiesContainer = ({ match, user }) => {
  return (
    <>
      <CardDeck>
        {user.properties.map((property) => (
          <PropertyCard key={property.id} match={match} property={property} />
        ))}

        <Card style={{ textAlign: "center" }} className="col-md-3">
          <NavLink style={{ paddingTop: "180px" }} to={`${match.url}/new`}>
            {" "}
            + List a new property
          </NavLink>
        </Card>
      </CardDeck>
    </>
  );
};

export default PropertiesContainer;

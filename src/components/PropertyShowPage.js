import React from 'react';
import {Route, Link, NavLink, withRouter} from 'react-router-dom';
import listingReducer from '../reducers/listsReducer';
import ListingInput from './ListingInput'
import Listing from './Listing'

const PropertyShowPage = ({match, properties}) =>{

    let property = properties.find(property => property.id === parseInt(match.params.propertyId))
    console.log(property)
    let activeListings 

    if(property.listings.length > 0){
      activeListings = 
        <ul>
          {property.listings.map(listing => (<Link to = {`/listings/${listing.id}`}>{listing.title}</Link>))}

        </ul>
    }else{
        activeListings = <p> No active listing</p>
    }

    return(

        <div>
          <NavLink to = {`${match.url}/listings/new`} >Create a new listing</NavLink>
          <h1>{property.address} - {property.state} - {property.zipcode}</h1>
          <p>{property.description}</p>
          <p>{property.bedroom_number} bedrooms - {property.bathroom_number} bathrooms</p>
          <p>host up to {property.guest_number} guest</p>
          <p>All active listings</p>
           {activeListings}

           <Route exact path  = {`${match.path}/listings/new`} >
               <ListingInput />
           </Route>

           

           

            
        </div>
    )

}

export default withRouter(PropertyShowPage)
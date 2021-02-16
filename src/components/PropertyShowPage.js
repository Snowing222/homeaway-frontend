import React from 'react';
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom';
import ListingInput from './ListingInput'
import Listing from './Listing'

const PropertyShowPage = ({match, properties}) =>{

    let property = properties.find(property => property.id === parseInt(match.params.propertyId))
    console.log(property.listings)
    let activeListings 

    if(property && property.listings.length > 0){
      activeListings = 
        <ul>
          {property.listings.map(listing => (<Link to = {`${match.url}/listings/${listing.id}`}>{listing.title}</Link>))}

        </ul>
    }else{
        activeListings = <p> No active listing</p>
    }

    return(

        <div>
          <h1>{property.address} - {property.state} - {property.zipcode}</h1>
          <NavLink to = {`${match.url}/listings/new`} >Create a new listing</NavLink>
          <p>{property.description}</p>
          <p>{property.bedroom_number} bedrooms - {property.bathroom_number} bathrooms</p>
          <p>host up to {property.guest_number} guest</p>
          <p>All active listings</p>
           {activeListings}

          
          <Switch>
          <Route path  = {`${match.path}/listings/new`} >
               <ListingInput />
           </Route>

           <Route path = {`${match.path}/listings/:listingId`} render = {routerProps => <Listing {...routerProps} />} />
          </Switch>

           
        </div>
    )

}

export default withRouter(PropertyShowPage)
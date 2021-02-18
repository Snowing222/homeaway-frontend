import React from 'react';
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom';
import ListingInput from './ListingInput'
import Listing from './Listing'
import {Image} from 'cloudinary-react'

const PropertyShowPage = ({match, properties}) =>{

    let property = properties.find(property => property.id === parseInt(match.params.propertyId))
    console.log(property.listings)
    let activeListings 

    if(property && property.listings.length > 0){
      activeListings = 
        <ul>
          {property.listings.map(listing => (<Link to = {`${match.url}/listings/${listing.id}`} style = {{display: "block"}}>{listing.title}</Link>))}

        </ul>
    }else{
        activeListings = <p> No active listing</p>
    }

    return(

        <div>
          <Image cloudName = "xue" publicId = {property.photo_src}></Image>

          <div className = "alignImg">
          <h1>{property.address} - {property.state} - {property.zipcode}</h1>
          <p>{property.description}</p>
          <p>{property.bedroom_number} bedrooms - {property.bathroom_number} bathrooms</p>
          <p>host up to {property.guest_number} guest</p>
          <hr />
          <h4>All active listings</h4>
           {activeListings}
          
          <h4> <NavLink style = {{fontWeight: "normal", color:"black"}}to = {`${match.url}/listings/new`} > + Create a new listing</NavLink></h4>
          {/* <Route path = {`${match.path}/listings/:listingId`} render = {routerProps => <Listing {...routerProps} />} /> */}
          </div>
          
          {/* <Switch>
          <Route path  = {`${match.path}/listings/new`} >
               <ListingInput />
           </Route>

           
          </Switch>  */}

           
        </div>
    )

}

export default withRouter(PropertyShowPage)
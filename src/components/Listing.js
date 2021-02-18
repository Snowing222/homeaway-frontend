import React from 'react'
import {connect} from 'react-redux'
import {Image, Button} from 'react-bootstrap'

import '../css/listing.css'


const Listing = ({match, listings}) => {

    let listing = listings.find(listing => listing.id === parseInt(match.params.listingId))

   
    let rent
    let trade
    let strict

    if (listing && listing.rent_mode){
        rent = <p>Rent for  ${listing.price} </p>
    }

    if (listing && listing.trade_mode){
        trade = <p>Accept Trade</p>
    }else{
        trade = <p> Not Accept Trade</p>
    }

    if(listing && listing.strict_mode){
        strict = <p>negotiable</p> 
    }else{
        strict = <p>Not negotiable</p>
    }
    
    if(listing){return (
 
            <div className = "listing">
           
           <h1 className = "center" >{listing.title}</h1>
           <div><Image src={listing.property.photo_src} fluid /></div>
           <div className = "alignImg">
           <p>{listing.property.description}</p>
           <p>Host by: {listing.user.name} <Button variant="info">Contact Owner</Button></p>
           <p>{listing.property.bedroom_number} bedrooms - {listing.property.bathroom_number} bathrooms - Host up to {listing.property.guest_number} guests</p>
           <p>Address: {listing.property.address} - State: {listing.property.state} - Zipcode :{listing.property.zipcode}</p>
           <p>Available from {listing.avail_date_begin} to {listing.avail_date_end} for {listing.avail_period} days</p>
           {rent}
           {trade}
           {strict}
           

           </div>
           
       </div>

      

    ) }else{
        return(
            <div>No listing match</div>
        )
    }

    
}

export default connect(state=>({listings: state.listings}))(Listing)
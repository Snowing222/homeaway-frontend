import React from 'react'

const Listing = ({match, listings}) => {
    
    let listing = listings.find(listing => listing.id === parseInt(match.params.listingId))
    console.log(listing)
    let rent
    let trade
    let strict

    if (listing.rent_mode){
        rent = <p>Rent for  ${listing.price} </p>
    }

    if (listing.trade_mode){
        trade = <p>Accept Trade</p>
    }else{
        trade = <p> Not Accept Trade</p>
    }

    if(listing.strict_mode){
        strict = <p>negotiable</p> 
    }else{
        strict = <p>Not negotiable</p>
    }
    
    

    return (
        <div>
            <h1>{listing.title}</h1>
            <p>{listing.property.description}</p>
            <p>Host by: {listing.user.name} <button>Contact Owner</button></p>
            <p>{listing.property.bedroom_number} bedrooms - {listing.property.bathroom_number} bathrooms - Host up to {listing.property.guest_number} guests</p>
            <p>Address: {listing.property.address} - State: {listing.property.state} - Zipcode :{listing.property.zipcode}</p>
            <p>Available from {listing.avail_date_begin} to {listing.avail_date_end} for {listing.avail_period} days</p>
            {rent}
            {trade}
            {strict}
            

        </div>

    ) 
}

export default Listing
import React from 'react';
import ListCard from './ListCard'

const Listings = ({listings, property}) => {
   
        return(
            <>
                 {listings.map(listing => <ListCard key = {listing.id} listing = {listing} property = {property} />)}            
            </> 

    
        )
 
    
}


export default Listings

 
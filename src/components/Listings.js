import React from 'react'
import Listing from './Listing'

const Listings = ({listings}) => {
    if(listings.length!==0){
        return(
            <div>
                {listings.map(listing => <Listing listing = {listing} key = {listing.id} />)}       
             </div>
            
        )

    }else{
        return(
            <p>"No match Listings"</p>
        )
    }
    
    
}


export default Listings

 
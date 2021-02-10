import React from 'react'
import Listing from './Listing'
// import { useHistory} from 'react-router-dom'

import {NavLink} from 'react-router-dom'

const Listings = ({listings}) => {

    if(listings.length!==0){
        return(
            <div>
                {listings.map(listing =><div key = {listing.id}> <NavLink key = {listing.id} to = {`/listings/${listing.id}`}>{listing.title}</NavLink></div>)}       
             </div>
            
        )

    }else{
        return(
            <p>"No match Listings"</p>
        )
    }
 
    
}


export default Listings

 
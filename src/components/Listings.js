import React from 'react'
import Listing from './Listing'
import {NavLink} from 'react-router-dom'

const Listings = ({listings}) => {

   
        return(
            <div>
                {listings.map(listing =><div key = {listing.id}> <NavLink key = {listing.id} to = {`/listings/${listing.id}`}>{listing.title}</NavLink></div>)}            
             </div>
            
        )
 
    
}


export default Listings

 
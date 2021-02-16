import React from 'react'
import {NavLink} from 'react-router-dom'

const Listings = ({listings}) => {

   
        return(
            <div style = {{margin: "30px"}}>
                {listings.map(listing =><div key = {listing.id}> <NavLink key = {listing.id} to = {`/listings/${listing.id}`}>{listing.title}</NavLink></div>)}            
             </div>
            
        )
 
    
}


export default Listings

 
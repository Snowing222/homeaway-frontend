import React from 'react'
import Listing from './Listing'
import {connect} from 'react-redux';

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


export default connect(state=>({listings: state.listings}))(Listings)

 
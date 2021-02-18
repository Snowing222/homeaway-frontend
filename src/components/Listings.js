import React from 'react';
import {CardDeck} from 'react-bootstrap';
import ListCard from './ListCard'

const Listings = ({listings, property}) => {
   
        return(
            <>
                 {listings.map(listing => <ListCard listing = {listing} property = {property} />)}            
            </> 

    
        )
 
    
}




export default Listings

 
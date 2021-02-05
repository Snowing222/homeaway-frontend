import React, { Component } from 'react';
import Listings from '../components/Listings'
import ListingSearch from '../components/ListingSearch'



class ListingContainer extends Component {
   
 
    render() {
       return(
           <div>
             <ListingSearch />
             <Listings />
           </div>
       )
    }
}

export default ListingContainer;

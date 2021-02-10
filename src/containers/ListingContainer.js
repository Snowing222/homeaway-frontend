import React, { Component } from 'react';
import Listings from '../components/Listings'
import ListingSearch from '../components/ListingSearch'
import {Route, BrowserRouter as Router, } from 'react-router-dom'
import Listing from '../components/Listing'
import {connect} from 'react-redux';



class ListingContainer extends Component {
   
    
    render() {
       return(
         <Router>
           <div>
             <ListingSearch />
             <Listings listings = {this.props.listings}/>
             <Route exact path = {`/listings/:listingId`} render = {routerProps => <Listing {...routerProps} listings ={this.props.listings} />} />
             
           </div>
         </Router>
           
       )
    }
}

export default connect(state=>({listings: state.listings}))(ListingContainer);

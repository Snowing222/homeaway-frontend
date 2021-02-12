import React, { Component } from 'react';
import Listings from '../components/Listings'
import ListingSearch from '../components/ListingSearch'
import {Route, Switch} from 'react-router-dom'
import Listing from '../components/Listing'
import {connect} from 'react-redux';



class ListingContainer extends Component {
   
    
    render() {
       return(
           <div>
             <ListingSearch />
             <Listings listings = {this.props.listings}/>

           </div>
           
       )
    }
}

export default connect(state=>({listings: state.listings}))(ListingContainer);

import React, { Component } from 'react';
import Listings from '../components/Listings'
import ListingSearch from '../components/ListingSearch'

class ListingContainer extends Component {
    constructor(){
        super()
        this.state = {
            listings: []
        }
    }

    componentDidMount(){
        this.fetchListings()
    }

    fetchListings = (query="") => {
        fetch(`http://localhost:3001/api/v1/listings${query}`)
        .then(resp => resp.json())
        .then(listings =>{
            this.setState({
                listings: [...listings]
            })
        })
    }
  
    render() {
       return(
           <div>
             <ListingSearch fetchListings = {this.fetchListings} />
             <Listings listings = {this.state.listings}/>
           </div>
       )
    }
}

export default ListingContainer;

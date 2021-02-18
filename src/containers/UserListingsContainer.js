import React from 'react';
import {connect} from 'react-redux'
import Listings from '../components/Listings';
import {CardDeck} from 'react-bootstrap'

const UserListingsContainer = ({user}) => {

    return(
      
      <CardDeck style = {{padding: "30px"}}>
          {user.properties.map(property => <Listings listings = {property.listings} property = {property}/>) }   
        </CardDeck>
    )
}

export default connect(state=>({user: state.user.user}))(UserListingsContainer)



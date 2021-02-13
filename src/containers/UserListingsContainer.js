import React from 'react';
import {connect} from 'react-redux'
import Listings from '../components/Listings';


const UserListingsContainer = ({user}) => {

    return(
      
        <div>
          {user.properties.map(p => <Listings listings = {p.listings}/>) }   
        </div>
    )
}

export default connect(state=>({user: state.user.user}))(UserListingsContainer)



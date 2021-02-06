import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'

class MyProfileContainer extends Component {

    render() {
        return (
            <div>
              <h1>Welcome {this.props.user.user.name}</h1>
              
                
            </div>
        );
    }
}

export default connect(state=>({user: state.user}))(MyProfileContainer);

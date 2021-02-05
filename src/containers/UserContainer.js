import React, { Component } from 'react';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';
import {connect} from 'react-redux';
import MyProfileContainer from './MyProfileContainer'
import {Redirect} from 'react-router-dom'


class UserContainer extends Component {
    renderProperContent = () => {
        let path = this.props.match.path
        if(this.props.loggedIn){
            <Redirect to="/myprofile" />
        }else if(path === '/signup'){
            return <SignUp />
        }else{
            return <LogIn />
        }
    }
  
    render() {
        return (
            <div>
               {this.renderProperContent()}
            </div>
            
        );
    }

    
}

const mapStateToProps = state =>{
    return {
        user: state.user.user,
        loggedIn: state.user.login
    }
}

export default connect(mapStateToProps)(UserContainer);

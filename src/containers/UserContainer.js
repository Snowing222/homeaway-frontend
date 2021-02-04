import React, { Component } from 'react';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn'

class UserContainer extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         currentUser: null,
    //         signUpForm: {
    //             name: "",
    //             email: "",
    //             password: "",

    //         }
    // }

    // handleSignUpSubmit = () => {

    // }

    // handleChange = (e) => {
    //     const {name, value} = e.target
    //     this.setState({
    //         currentUser: {...currentUser, [name]: value}
    //     }  
    //     )
    // }
  
    render() {
        return (
            <div>
                <SignUp handleChange = {this.handleChange}/>
            </div>
        );
    }
}

export default UserContainer;

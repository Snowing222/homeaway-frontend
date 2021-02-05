import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/fetchUser';

class LogIn extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }  
        )
    }

    handleLoginSubmit = (e) =>{
        e.preventDefault()
        let userObj = this.state
        this.props.loginUser(userObj)
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
          <div className = "LogIn">
            <form onSubmit = {this.handleLoginSubmit}>
                <label>Email:</label>
                <input type = "text" name = "email" placeholder = "email" value = {this.state.email} onChange = {this.handleChange}/>
                <label>Password:</label>
                <input type = "password" name = "password" placeholder = "password" value = {this.state.password} onChange = {this.handleChange}/>
                <button type = "submit">Log In</button>
            </form>
          </div>
        );
    }
}

export default connect(null, {loginUser})(LogIn);



 
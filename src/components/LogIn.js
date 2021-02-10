import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/fetchUser';
import {Redirect} from 'react-router-dom';


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
        let history = this.props.history
        e.preventDefault()
        let userObj = this.state
        this.props.loginUser(userObj, history)
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        console.log(this.props)
        if (this.props.user.login === 'true') {
            return <Redirect to='/myprofile'/>;
         }else{
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
              )
         }
        
    }
}

export default connect(state =>({user: state.user}), {loginUser})(LogIn);



 
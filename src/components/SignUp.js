import React, { Component } from 'react';
import {createUser} from '../actions/fetchUser'

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    handleSignUpSubmit = () => {

    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }  
        )
    }

    handleSignUpSubmit = (e) =>{
        e.preventDefault()
        let userObj = this.state
        createUser(userObj)
    }


    render() {
        return(
            <div>
            <form onSubmit = {this.handleSignUpSubmit}>
              <p>
                <label>name: </label>
                <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange} placeholder = "Elsa Chen"></input>
              </p>
              <p>
              <label>email: </label>
              <input type = "email" name = "email" value = {this.state.email} onChange = {this.handleChange} placeholder = "elsa@gmail.com"></input>
              </p>
              <p>
              <label>Password: </label>
              <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange} placeholder = "Please enter your password"></input>
              </p>
              <p>
              <button type = "submit"> Submit</button>
              </p>
            </form>
        </div>
        )  
    }
}

export default SignUp;

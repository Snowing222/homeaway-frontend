import React, { Component } from 'react';
import {createUser} from '../actions/fetchUser';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap'

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
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

    handleSignUpSubmit = (e) =>{
        let history = this.props.history
        e.preventDefault()
        let userObj = this.state
        this.props.createUser(userObj,history)
        this.setState({
            name: "",
            email: "",
            password: ""
        })
    }


    render() {
        return(
            <div>
            <Form onSubmit = {this.handleSignUpSubmit}>
              <Form.Group controlId = "SignUpName">
                <Form.Label>name: </Form.Label>
                <Form.Control type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange} placeholder = "Elsa Chen" />
              </Form.Group>
              <Form.Group controlId = "SignUpEmail">
              <Form.Label>email: </Form.Label>
              <Form.Control type = "email" name = "email" value = {this.state.email} onChange = {this.handleChange} placeholder = "elsa@gmail.com" />
              </Form.Group>
              <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange} placeholder = "Please enter your password" />
              </Form.Group>
              <Button type = "submit"  variant = 'primary'> Submit</Button>
            </Form>
        </div>
        )  
    }
}

export default connect(null, {createUser})(SignUp);

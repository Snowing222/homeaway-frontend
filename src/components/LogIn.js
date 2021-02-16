import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/fetchUser';
import {Redirect} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap'


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
                  <Form onSubmit = {this.handleLoginSubmit}>
                    <Form.Group controId = "loginEmail">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type = "email" name = "email" placeholder = "Enter email" value = {this.state.email} onChange = {this.handleChange}/>
                    </Form.Group>


                    <Form.Group controId = "loginEmail">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control type = "password" name = "password" placeholder = "password" value = {this.state.password} onChange = {this.handleChange}/>
                    </Form.Group>
                     
                      <Button type = "submit" variant = 'primary'>Log In</Button>
                   

                     
                  </Form>
              )
         }
        
    }
}

export default connect(state =>({user: state.user}), {loginUser})(LogIn);



 
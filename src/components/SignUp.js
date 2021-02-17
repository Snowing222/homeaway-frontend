import React, { Component } from 'react';
import {createUser} from '../actions/fetchUser';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap'
import '../css/form.css'

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
        //     <div>
        //     <Form onSubmit = {this.handleSignUpSubmit}>
        //       <Form.Group controlId = "SignUpName">
        //         <Form.Label>name: </Form.Label>
        //         <Form.Control type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange} placeholder = "Elsa Chen" />
        //       </Form.Group>
        //       <Form.Group controlId = "SignUpEmail">
        //       <Form.Label>email: </Form.Label>
        //       <Form.Control type = "email" name = "email" value = {this.state.email} onChange = {this.handleChange} placeholder = "elsa@gmail.com" />
        //       </Form.Group>
        //       <Form.Group>
        //       <Form.Label>Password: </Form.Label>
        //       <Form.Control type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange} placeholder = "Please enter your password" />
        //       </Form.Group>
        //       <Button type = "submit"  variant = 'primary'> Submit</Button>
        //     </Form>
        // </div>

         <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-img-left d-none d-md-flex">
            
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Register</h5>
             <form className="form-signin" onSubmit = {this.handleSignUpSubmit}>
              <div className="form-label-group">
                <input type="text" id="inputUserame" className="form-control" placeholder="Username" name = "name" value = {this.state.name} onChange = {this.handleChange} required autofocus />
                <label for="inputUserame">Username</label>
              </div>

              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name = "email" value = {this.state.email} onChange = {this.handleChange} required />
                <label for="inputEmail">Email address</label>
              </div>
              
              <hr />

              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" name = "password" value = {this.state.password} onChange = {this.handleChange} required />
                <label for="inputPassword">Password</label>
              </div>
              
              {/* <div className="form-label-group">
                <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />
                <label for="inputConfirmPassword">Confirm password</label>
              </div> */}

              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
              <a className="d-block text-center mt-2 small" href="/login">Sign In</a> 
              {/* <hr className="my-4">
              <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign up with Google</button>
              <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button>  */}
            </form> 
          </div>
        </div>
      </div>
    </div>
  </div>
        )  
    }
}

export default connect(null, {createUser})(SignUp);

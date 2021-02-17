import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/fetchUser';
import {Redirect} from 'react-router-dom';

import '../css/form.css'



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
        if (this.props.user.login === 'true') {
            return <Redirect to='/myprofile'/>;
         }else{
            return (
             
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                      <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex">
                        
                        </div>
                        <div className="card-body">
              <h3 className="card-title text-center">Welcome back!</h3>
              <form className="form-signin" onSubmit = {this.handleLoginSubmit} >
                <div className="form-label-group">
                  <input type="email" id="inputEmail" name = "email" className="form-control" placeholder="Email address" value = {this.state.email} onChange = {this.handleChange} required autofocus />
                  <label for="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input type="password" id="inputPassword" name ="password" className="form-control" placeholder="Password"  value = {this.state.password} onChange = {this.handleChange}required />
                  <label for="inputPassword">Password</label>
                </div>

                <div className="form-label-group">
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Log In</button>
                </div>
              </form>
              </div>
        </div>
      </div>
    </div>
  </div>




              )
         }
        
    }
}

export default connect(state =>({user: state.user}), {loginUser})(LogIn);



 
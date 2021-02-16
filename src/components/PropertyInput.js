import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProperty} from '../actions/fetchProperties';
import {withRouter} from 'react-router-dom'
import { Form, Col ,Button} from 'react-bootstrap';

class PropertyInput extends Component {
    constructor(){
        super()
        this.state = {
            user_id: "",
            photosrc: "",
            description: "",
            bedroomNumber: "1",
            bathroomNumber: "1",
            guestNumber: "",
            address: "",
            state: "NY",
            zipcode: ""

        }
    }

    
    handleSubmit = (e) =>{
        console.log(this.state)
        let history = this.props.history
        e.preventDefault()
        let propertyObj = {...this.state, user_id: this.props.user.user.id}
        this.props.createProperty(propertyObj, history)
    }

    handleChange = (e)=>{
        console.log(e.target.name, e.target.value)
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }




    render() {
        return (
            <div>
              <h1>LIST A NEW PROPERTY</h1>
             
              <Form onSubmit = {this.handleSubmit}>

              <Form.Group controlId="formGridAddress">
                <Form.Label>Address 2</Form.Label>
                  <Form.Control name="address" value ={this.state.address} onChange = {this.handleChange} placeholder="Apartment, studio, or floor" />
              </Form.Group>
              
              <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
               <Form.Control as="select"  name = "state" value = {this.state.state.value} onChange={this.handleChange}>
                    <option value="NY">NY</option>
                    <option value="NJ">NJ</option>
                    <option value="FL">FL</option>
                    <option value="CA">CA</option>
                </Form.Control>
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>ZipCode:</Form.Label>
                <Form.Control name="zipcode" value ={this.state.zipcode} onChange = {this.handleChange} /> 
                </Form.Group>
              </Form.Row>
               
            

              <Form.Group>
                <Form.File id="UploadImage" label="Upload images" value = {this.state.photosrc.value} onChange = {this.handleChange}  />
               </Form.Group>

                
                <Form.Group>
                <Form.Label>Number of Bedrooms: </Form.Label>
                <Form.Control as = "select" name = "bedroomNumber" value = {this.state.bedroomNumber.value} onChange = {this.handleChange} >
                   <option value="1">1 Bedroom</option>
                   <option value="2">2 Bedrooms</option>
                   <option value="3">3 Bedrooms</option>
                   <option value="4">4 bedrooms</option>
                   <option value="5">5 bedrooms and above</option>
                </Form.Control>
                </Form.Group>
                
                
                <Form.Group>
                <Form.Label>Number of Bathrooms: </Form.Label>
                <Form.Control as = "select" name = "bathroomNumber" value = {this.state.bathroomNumber.value} onChange = {this.handleChange} >
                   <option value="1">1 Bathroom</option>
                   <option value="2">2 Bathrooms</option>
                   <option value="3">3 Bathrooms and above</option>   
                </Form.Control>

                </Form.Group>


                <Form.Group>
                <Form.Label>Number of Guests:</Form.Label>
                <Form.Control name="guestNumber" value ={this.state.guestNumber} onChange = {this.handleChange} />
                </Form.Group>

                
                <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control as ="textarea" name = "description" rows="4" cols="50" value = {this.state.description} onChange = {this.handleChange} />
                
                </Form.Group>
                
                <Button type = "submit" variant="primary">List this Property</Button>
              </Form>
                
            </div>
        );
    }
}

export default withRouter(connect(state=>({user: state.user}), {createProperty})(PropertyInput));

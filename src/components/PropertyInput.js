import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProperty} from '../actions/fetchProperties'

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
        e.preventDefault()
        let propertyObj = {...this.state, user_id: this.props.user.user.id}
        this.props.createProperty(propertyObj)
        this.setState({
            user_id: "",
            photosrc: "",
            description: "",
            bedroomNumber: "1",
            bathroomNumber: "1",
            guestNumber: "",
            address: "",
            state: "NY",
            zipcode: ""
        })
        
        

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
              <h1>Listing Your Property</h1>
              <form onSubmit = {this.handleSubmit}>
                <label>Description:</label>
                <textarea name = "description" rows="4" cols="50" value = {this.state.description} onChange = {this.handleChange} />

                <label>Upload Image:</label>
                <input type = "text" name = "photosrc" value = {this.state.photosrc} onChange = {this.handleChange}></input>

                <label>Number of Bedrooms: </label>
                <select name = "bedroomNumber" value = {this.state.bedroomNumber.value} onChange = {this.handleChange} >
                   <option value="1">1 Bedroom</option>
                   <option value="2">2 Bedrooms</option>
                   <option value="3">3 Bedrooms</option>
                   <option value="4">4 bedrooms</option>
                   <option value="5">5 bedrooms and above</option>
                </select>

                <label>Number of Bathrooms: </label>
                <select name = "bathroomNumber" value = {this.state.bathroomNumber.value} onChange = {this.handleChange} >
                   <option value="1">1 Bathroom</option>
                   <option value="2">2 Bathrooms</option>
                   <option value="3">3 Bathrooms and above</option>   
                </select>

                <label>Number of Guests:</label>
                <input type = "text" name="guestNumber" value ={this.state.guestNumber} onChange = {this.handleChange}></input>

                <label>Address:</label>
                <input type = "text" name="address" value ={this.state.address} onChange = {this.handleChange}></input>

                <label>State:</label>
                <select name = "state" value = {this.state.state.value} onChange={this.handleChange}>
                    <option value="NY">NY</option>
                    <option value="NJ">NJ</option>
                    <option value="FL">FL</option>
                    <option value="CA">CA</option>
                </select>

                <label>ZipCode:</label>
                <input type = "text" name="zipcode" value ={this.state.zipcode} onChange = {this.handleChange}></input> 
                <button type = "submit">List this Property</button>
              </form>
                
            </div>
        );
    }
}

export default connect(state=>({user: state.user}), {createProperty})(PropertyInput);

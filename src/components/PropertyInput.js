import React, { Component } from 'react';

class PropertyInput extends Component {
    constructor(){
        super()
        this.state = {
            userId = "",
            photoSrc = "",
            description = "",
            bedroomNumber = "",
            bathroomNumber = "",
            guestNumber = "",
            address = "",
            state = "",
            zipcode = ""

        }
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        

    }

    handleChange = (e)=>{
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
                <Textarea name = "description" rows="4" cols="50" value = {this.state.description} onChange = {this.handleChange} />

                <label>Upload Image:</label>
                <input type = "text" name = "photo_src" value = {this.state.photoSrc} onChange = {this.handleChange}></input>

                <label>Number of Bedrooms: </label>
                <Select name = "BedroomNumber" value = {this.state.bedroomNumber} onChange = {this.handleChange} >
                   <option value="1">1 Bedroom</option>
                   <option value="2">2 Bedrooms</option>
                   <option value="3">3 Bedrooms</option>
                   <option value="4">4 bedrooms</option>
                   <option value="5">5 bedrooms and above</option>
                </Select>

                <label>Number of Bathrooms: </label>
                <Select name = "BathroomNumber" value = {this.state.bathroomNumber} onChange = {this.handleChange} >
                   <option value="1">1 Bathroom</option>
                   <option value="2">2 Bathrooms</option>
                   <option value="3">3 Bathrooms and above</option>   
                </Select>

                <label>Number of Guests:</label>
                <input type = "text" name="guestNumber" value ={this.state.guestNumber} onChange = {this.handleChange}></input>

                <label>Address:</label>
                <input type = "text" name="address" value ={this.state.address} onChange = {this.handleChange}></input>

                <label>State:</label>
                <select name = "state" value={this.state.state} onChange={this.handleChange}>
                    <option value="NY">NY</option>
                    <option value="NJ">NJ</option>
                    <option value="FL">FL</option>
                    <option value="CA">CA</option>
                </select>

                <label>ZipCode:</label>
                <input type = "text" name="address" value ={this.state.address} onChange = {this.handleChange}></input>
                <button type = "submit">List this Property</button>
              </form>
                
            </div>
        );
    }
}

export default PropertyInput;

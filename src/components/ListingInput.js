import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {createListing} from '../actions/fetchListings'
import {connect} from 'react-redux'

class ListingInput extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            price: "",
            avail_date_begin: "",
            avail_date_end: "",
            avail_period: "",
            trade_mode: true,
            strict_mode: true,
            rent_mode: true

        }
    }
    handleChange = (e) =>{
      
     let {name, value} = e.target
       value === "true"? value = true : value = value
       value === "false"? value = false : value = value
       this.setState({
           [name]: value
       })
       console.log(this.state)
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        let propertyId = this.props.match.params.propertyId
        let history = this.props.history
        let listingObj = {...this.state, property_id: propertyId}
        this.props.createListing(listingObj, history)
    }

    render() {
        return (
            <div>
               <form onSubmit = {this.handleSubmit}>
                   <label>Title:</label>
                   <input type = "text" name = "title" value = {this.state.title} onChange = {this.handleChange} placeholder = "An eye catching title" />
                   <label>Available Date from: </label>
                   <input type = "date" name = "avail_date_begin" value = {this.state.avail_date_begin} onChange = {this.handleChange} />
                   <label>Available Date to: </label>
                   <input type = "date" name = "avail_date_end" value = {this.state.avail_date_end} onChange = {this.handleChange} />
                   <label>How many days is it available: </label>
                   <input type = "text" name = "avail_period" value = {this.state.period} onChange = {this.handleChange} />
                   <label>Does it allow rent?</label>
                   <select name = "rent_mode" value = {this.state.rent_mode} onChange={this.handleChange}>
                     <option value = "true">Yes</option>
                     <option value = "false">No</option>
                   </select>

                   <label>Does it allow trade?</label>
                   <select name = "trade_mode" value = {this.state.trade_mode} onChange={this.handleChange}>
                     <option value = "true">Yes</option>
                     <option value = "false">No</option>
                   </select>

                   <label>Are you flexible with the price and terms</label>
                   <select name = "strict_mode" value = {this.state.strict_mode} onChange={this.handleChange}>
                     <option value = "true">Yes</option>
                     <option value = "false">No</option>
                   </select>

                   <label>How much per night? </label>
                   <input type = "text" name = "price" value = {this.state.price} onChange = {this.handleChange} />

                   <button type = "submit">Submit Listing</button>
                   

               </form>
            </div>
        );
    }
}

export default withRouter(connect(null, {createListing})(ListingInput));

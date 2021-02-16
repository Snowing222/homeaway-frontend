import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {createListing} from '../actions/fetchListings';
import {connect} from 'react-redux';
import { Form, Button} from 'react-bootstrap';

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
       value = (value === "true"? true : value)
       value = (value === "false"? false : value)
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
               <h2>CREAT A NEW LISTING</h2>
               <Form onSubmit = {this.handleSubmit}>
                   <Form.Group>
                   <Form.Label> Title: </Form.Label>
                   <Form.Control name = "title" value = {this.state.title} onChange = {this.handleChange} placeholder = "An eye catching title" />
                   </Form.Group>
                   
                   <Form.Group>
                   <Form.Label>Available Date from: </Form.Label>
                   <Form.Control type = "date" name = "avail_date_begin" value = {this.state.avail_date_begin} onChange = {this.handleChange} />
                   </Form.Group>

                   <Form.Group>
                   <Form.Label>Available Date to: </Form.Label>
                   <Form.Control type = "date" name = "avail_date_end" value = {this.state.avail_date_end} onChange = {this.handleChange} />
                   </Form.Group>

                   <Form.Group>
                   <Form.Label>How many days is it available: </Form.Label>
                   <Form.Control name = "avail_period" value = {this.state.period} onChange = {this.handleChange} />
                   </Form.Group>

                   <Form.Group>
                   <Form.Label>Rent Mode</Form.Label>
                   <Form.Text Muted>People can rent your place if you choose Yes</Form.Text>
                   <Form.Control as = "select" name = "rent_mode" value = {this.state.rent_mode} onChange={this.handleChange}>
                     <option value = "true">Yes</option>
                     <option value = "false">No</option>
                   </Form.Control>
                   </Form.Group>

                   <Form.Group>
                   <Form.Label>Trade Mode:</Form.Label>
                   <Form.Text Muted>People can exchange with your place if you choose Yes</Form.Text>
                   <Form.Control as = "select" name = "trade_mode" value = {this.state.trade_mode} onChange={this.handleChange}>
                     <option value = "true">Yes</option>
                     <option value = "false">No</option>
                   </Form.Control>
                   </Form.Group>


                 <Form.Group>
                   <Form.Label>Strict Mode:</Form.Label>
                   <Form.Text Muted>Are you strict with price, timeframe, or trade mode</Form.Text>
                   <Form.Control as = "select" name = "strict_mode" value = {this.state.strict_mode} onChange={this.handleChange}>
                     <option value = "true">Yes</option>
                     <option value = "false">No</option>
                   </Form.Control>
                   </Form.Group>
                   
                   <Form.Group>
                   <Form.Label>How much per night?  </Form.Label>
                   <Form.Control name = "price" value = {this.state.price} onChange = {this.handleChange} />
                   </Form.Group>

                   <Button type = "submit" variant="primary">Submit Listing</Button>
                   

               </Form>
            </div>
        );
    }
}

export default withRouter(connect(null, {createListing})(ListingInput));

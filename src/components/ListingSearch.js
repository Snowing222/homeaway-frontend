import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchListings} from '../actions/fetchListings';
import {Form, Col, Button} from 'react-bootstrap'


class ListingSearch extends Component {
    constructor(){
        super()
        this.state = {
           avail_date_begin: "",
           avail_date_end: "",
           avail_period: ""
        }
    }
   

    handleChange =  (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>{console.log(this.state)})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let params = this.state
        let queryString = "?" + Object.keys(this.state).map(key => key + '=' + params[key]).join('&');
        this.props.fetchListings(queryString)
    }

        
    render() {
        return (
            <div>
                <Form inline onSubmit = {this.handleSubmit}>    
                <Col md = {4}>
                   <Form.Group >
                    <Form.Label style = {{padding: "5px"}}>Travel for: </Form.Label>
                    <Form.Control type = "text" name ="avail_period" value = {this.state.avail_period} onChange = {this.handleChange} />{' '}Days
                    </Form.Group>
                </Col>
                   
                <Col md = {3}>
                   <Form.Group >
                    <Form.Label style = {{padding: "5px"}}>From:</Form.Label>
                    <Form.Control type = "date" name = "avail_date_begin" value = {this.state.avail_date_begin} onChange = {this.handleChange} />
                    </Form.Group>
                </Col>
                   
                <Col md = {3}>
                    <Form.Group >
                    <Form.Label style = {{padding: "5px"}}>To:</Form.Label>
                    <Form.Control type = "date" name = "avail_date_end" value = {this.state.avail_date_en} onChange = {this.handleChange} />
                    </Form.Group>
                </Col>  
                   
                <Col md = {{ span: 1, offset: 1 }}>
                <Button type = "submit" variant="primary" >Search</Button>
                </Col> 
                    


                </Form>
            </div>
        );
    }
}

export default connect(null, {fetchListings})(ListingSearch);

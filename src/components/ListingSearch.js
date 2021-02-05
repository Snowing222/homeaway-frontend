import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchListings} from '../actions/fetchListings'

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
                <form onSubmit = {this.handleSubmit}>
                    <label>How many days you will travel:</label>
                    <input type = "text" name ="avail_period" value = {this.state.avail_period} onChange = {this.handleChange} />
                    <label>Available days begine:</label>
                    <input type = "date" name = "avail_date_begin" value = {this.state.avail_date_begin} onChange = {this.handleChange} />
                    <label>Available days end</label>
                    <input type = "date" name = "avail_date_end" value = {this.state.avail_date_en} onChange = {this.handleChange} />
                    <button type = "submit" >Search</button>


                </form>
            </div>
        );
    }
}

export default connect(null, {fetchListings})(ListingSearch);

import React, { Component } from 'react';

class ListingInput extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            price: "",
            avail_date_begin: "",
            avail_date_end: "",
            avail_period: "",
            trade_mode: "",
            rent_mode: "",
            strict_mode: ""

        }
    }

    handleSubmit = ()=>{

    }

    render() {
        return (
            <div>
               <form onSubmit = {this.handleSubmit}>
               

               </form>
            </div>
        );
    }
}

export default ListingInput;

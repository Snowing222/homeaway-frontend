import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import PropertiesList from '../components/PropertiesList'


class PropertiesContainer extends Component {
    
    render() {
        return (
            <div>
                <PropertiesList properties = {this.props.user.properties} userId = {this.props.user.id}/>
            
               
            </div>
        );
    }
}

export default connect(state=>({user: state.user.user}))(PropertiesContainer);

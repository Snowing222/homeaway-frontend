import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink, Route, Switch, BrowserRouter as Router, } from 'react-router-dom'
import PropertiesList from '../components/PropertiesList';
import PropertyInput from '../components/PropertyInput';
import PropertiesContainer from './PropertiesContainer';
import UserListingsContainer from './UserListingsContainer'


class MyProfileContainer extends Component {

    render() {
      
        return (
         <Router>
             <div>
              <h1>Welcome {this.props.user.user.name}</h1>
                <div>
                <ul>
                    <li>
                       {/* <NavLink to = {`myprofile/properties`}> Manage Your Properties</NavLink>   */}
                        <NavLink to = {`${this.props.match.url}/properties`}> Manage Your Properties</NavLink>
                    </li>
                    <li>
                        <NavLink to =  {`${this.props.match.url}/listings`}>All listings</NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route exact path = {`${this.props.match.url}/properties`} render  = {(routerProps) => <PropertiesContainer {...routerProps} />}/>

                    <Route exact path =  {`${this.props.match.url}/listings`} render  = {(routerProps) => <UserListingsContainer {...routerProps} />}/>
                
                </Switch>

                 {/* <PropertyInput /> */}

                 
                
                  
                  
        
                </div>
              
                
            </div>
         </Router>
            
        );
    }
}

export default connect(state=>({user: state.user}))(MyProfileContainer);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink, Route, Switch} from 'react-router-dom'
import PropertiesContainer from './PropertiesContainer';
import UserListingsContainer from './UserListingsContainer';
import {Container, Row, Col} from 'react-bootstrap'



class MyProfileContainer extends Component {

    render() {
      
        return (
            
            <Container>
              {/* <h1>Welcome {this.props.user.user.name}</h1> */}
              <Row>
              <Col md = {3}>
               <ul>
                    <li>
                     <NavLink to = "/myprofile/properties"> Manage Your Properties</NavLink>  
                    </li>
                    <li>
                    <NavLink to = "/myprofile/listings"> All listings</NavLink> 
                    </li>
                </ul>
                  
              </Col>
              
              <Col md = {9}>
                <Switch>
                    <Route path = "/myprofile/properties" render  = {(routerProps) => <PropertiesContainer {...routerProps} user = {this.props.user.user}/>}/>
                    <Route path = "/myprofile/listings" render  = {(routerProps) => <UserListingsContainer {...routerProps} />}/>
                  
                
                </Switch>
              </Col>

                
            
              </Row>     
            </Container>
         
    
            
        );
    }
}

export default connect(state=>({user: state.user}))(MyProfileContainer);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink, Route, Switch} from 'react-router-dom'
import PropertiesContainer from './PropertiesContainer';
import UserListingsContainer from './UserListingsContainer';
import {Nav, Row, Col, Container} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import PropertyInput from '../components/PropertyInput';
import PropertyShowPage from '../components/PropertyShowPage';
import ListingInput from '../components/ListingInput';
import Listing from '../components/Listing'

class MyProfileContainer extends Component {

    render() {
      
        return (
            
            <Container fluid>
              {/* <h1>Welcome {this.props.user.user.name}</h1> */}

              <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>


                    <Col  xs={10} id="page-content-wrapper">
                    <Switch>
                    <Route exact path = '/myprofile/properties/new' component = {PropertyInput} />
                   
                    <Route exact path = "/myprofile/properties" render  = {(routerProps) => <PropertiesContainer {...routerProps} user = {this.props.user.user}/>}/>
                    <Route exact path = "/myprofile/listings" render  = {(routerProps) => <UserListingsContainer {...routerProps}  />}/>
                    <Route path = '/myprofile/properties/:propertyId/listings/new' component = {ListingInput} /> 
                    <Route path = '/myprofile/properties/:propertyId/listings/:listingId' render = {routerProps => <Listing {...routerProps} />} />
                    <Route path = '/myprofile/properties/:propertyId' render = {(routerProps) => <PropertyShowPage {...routerProps} properties = {this.props.user.user.properties}/> } /> 
                    
                   
                   
    
                
               




                   
                    </Switch>
                    </Col> 
                </Row>

                {/* <Switch>
                  <Route path = {`${match.path}/new`} component = {PropertyInput} />
                  <Route path = {`${match.path}/:propertyId`} render = {(routerProps) => <PropertyShowPage {...routerProps} properties = {user.properties}/> } />
                 </Switch> */}
              {/* <Row>
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
            
              </Row>      */}
            </Container>
            
         
    
            
        );
    }
}

export default connect(state=>({user: state.user}))(MyProfileContainer);

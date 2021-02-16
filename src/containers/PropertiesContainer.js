import React from 'react';
import {Route, Switch, BrowserRouter as Router, NavLink} from 'react-router-dom';
import PropertiesList from '../components/PropertiesList'
import PropertyInput from '../components/PropertyInput';
import PropertyShowPage from '../components/PropertyShowPage'
import {Container, Col, Row} from 'react-bootstrap'


const PropertiesContainer =({match, user})=> {

        return (

            
             <Container>
                <Row>
                  <Col md = {3}>
                    <PropertiesList properties = {user.properties} userId = {user.id}/>
                    <NavLink to = {`${match.url}/new`}>List a new property</NavLink> 
                  </Col>
                 
                 <Col md = {9}>
                 <Switch>
                  <Route path = {`${match.path}/new`} component = {PropertyInput} />
                  <Route path = {`${match.path}/:propertyId`} render = {(routerProps) => <PropertyShowPage {...routerProps} properties = {user.properties}/> } />
                 </Switch>
                 </Col>

                </Row>
               
                
                    
             </Container>
       
            

        )
}

export default PropertiesContainer;

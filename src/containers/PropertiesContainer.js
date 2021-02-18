import React from 'react';
import {Route, Switch, BrowserRouter as Router, NavLink} from 'react-router-dom';
import PropertiesList from '../components/PropertiesList'
import PropertyInput from '../components/PropertyInput';
import PropertyShowPage from '../components/PropertyShowPage'
import {Container, Col, Row} from 'react-bootstrap'
import {CardDeck, Card} from 'react-bootstrap';
import PropertyCard from '../components/PropertyCard'


const PropertiesContainer =({match, user})=> {

        return (
<>
            
             <CardDeck>
                    
                   {user.properties.map(property =><PropertyCard key = {property.id} match = {match} property = {property} /> )}       
                    {/* <PropertiesList properties = {user.properties} userId = {user.id}/> */}
                    <Card style = {{textAlign: "center"}}>
               
                    <NavLink style = {{paddingTop: "180px"}} to = {`${match.url}/new`}> + List a new property</NavLink> 
                    </Card>
                    
                 
          
                    </CardDeck>
                    
                    {/* <Switch>
                  <Route path = {`${match.path}/new`} component = {PropertyInput} />
                  <Route path = {`${match.path}/:propertyId`} render = {(routerProps) => <PropertyShowPage {...routerProps} properties = {user.properties}/> } />
                 </Switch> */}
 </>      
            

        )
}

export default PropertiesContainer;

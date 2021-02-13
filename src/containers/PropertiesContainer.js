import React from 'react';
import {Route, Switch, BrowserRouter as Router, NavLink} from 'react-router-dom';
import PropertiesList from '../components/PropertiesList'
import PropertyInput from '../components/PropertyInput';
import PropertyShowPage from '../components/PropertyShowPage'


const PropertiesContainer =({match, user})=> {

        return (

            <Router>
             <div>
            
                <PropertiesList properties = {user.properties} userId = {user.id}/>
                <NavLink to = {`${match.url}/new`}>List a new property</NavLink> 
                <Switch>
                  <Route path = {`${match.path}/new`} component = {PropertyInput} />
                  <Route path = {`${match.path}/:propertyId`} render = {(routerProps) => <PropertyShowPage {...routerProps} properties = {user.properties}/> } />

                </Switch>

                
                    
             </div>
            </Router>
            

        )
}

export default PropertiesContainer;

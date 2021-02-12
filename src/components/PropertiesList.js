import React from 'react'
import {NavLink} from 'react-router-dom'

const PropertiesList = ({properties}) =>{
    return(
        <div>
            {properties.map(property =><div key = {property.id}> <NavLink key = {property.id} to = {`/myprofile/properties/${property.id}`}>{property.address}</NavLink></div>)}       
         </div>
        
    )

}

export default PropertiesList
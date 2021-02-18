import {NavLink} from 'react-router-dom';
import {Card} from 'react-bootstrap'

const PropertyCard = ({property, match}) =>{
    return(
        <Card  key = {property.id} width = "297.75px" >
        <Card.Img variant="top" src={property.photo_src} height = "215px"  />
        <Card.Body >
          <Card.Title style = {{color:"black"}}>{property.address}</Card.Title>
          <Card.Text style = {{color:"black"}}>
           {property.description}
          </Card.Text>
          <NavLink to= {`/myprofile/properties/${property.id}`}>More Info</NavLink>
        </Card.Body>
        
        </Card>
        
    )
}

export default PropertyCard;
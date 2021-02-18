import {NavLink} from 'react-router-dom';
import {Card} from 'react-bootstrap'

const ListCard = ({listing, property}) =>{
    let listingProperty = property || listing.property

    return(
        <Card  key = {listing.id} style = {{width: "297.75px"}}>
        <Card.Img variant="top" src={listingProperty.photo_src} height = "215px" />
        <Card.Body >
          <Card.Title style = {{color:"black"}}>{listing.title}</Card.Title>
          <Card.Text style = {{color:"black"}}>
           {listingProperty.description}
          </Card.Text>
          <NavLink to={`/listings/${listing.id}`}>More Info</NavLink>
        </Card.Body>
        
    
        </Card>
        
    )
}

export default ListCard;
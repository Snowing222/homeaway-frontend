import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar'
import {Container, Col, Row} from 'react-bootstrap'

const MyNotLoggedInNavBar = () => {
  return (

         <Navbar bg="light" variant="light" sticky="top">
   
    <Navbar.Brand href = '/'> HomeAway </Navbar.Brand>
 
        <NavLink className = 'nav-link' to="/signup">Becomes a host</NavLink>
        <NavLink className = 'nav-link' to="/login">Log In</NavLink> 
  
      </Navbar>
  
    
   
    
    
  );
};

    
export default MyNotLoggedInNavBar;
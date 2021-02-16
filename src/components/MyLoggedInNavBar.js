import { NavLink } from 'react-router-dom';
import { useHistory} from 'react-router-dom'
import Navbar from 'react-bootstrap/NavBar'
import Button from 'react-bootstrap/Button'


const MyLoggedInNavBar = ({logOut}) => {
  const history = useHistory()
  
  return (

     <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href = '/'> HomeAway </Navbar.Brand>
      <NavLink className = 'nav-link' to="/myprofile">My Profile</NavLink>
      <Button  variant="outline-info" onClick = {()=>{
        logOut()
        history.push('/')
      }}>Log Out</Button>
    </Navbar>

    
  );
};

    
export default MyLoggedInNavBar;
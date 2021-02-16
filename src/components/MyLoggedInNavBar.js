import { NavLink } from 'react-router-dom';
import { useHistory} from 'react-router-dom'
import {Navbar, Button, Container} from 'react-bootstrap'
import {connect} from 'react-redux'

const MyLoggedInNavBar = ({user,logOut}) => {
  const history = useHistory()

  return (
   
  <Container>
    <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href = '/'> HomeAway </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      {/* <NavLink className = 'nav-link' to="/myprofile">My Profile</NavLink> */}

      <Navbar.Text>
      <NavLink className = 'nav-link' to="/myprofile">Sign in as: {user.name}</NavLink>
      </Navbar.Text>
   
      <Button  className="justify-content-end"  size="sm" variant="outline-info" onClick = {()=>{
        logOut()
        history.push('/')
      }}>Log Out</Button>
         </Navbar.Collapse>
    
  

    </Navbar>
  </Container>
     

    
  );
};

    
export default connect(state=>({user: state.user.user}))(MyLoggedInNavBar);
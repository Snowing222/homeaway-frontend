import { NavLink } from 'react-router-dom';
import { useHistory} from 'react-router-dom'

const MyLoggedInNavBar = ({logOut}) => {
  const history = useHistory()
  
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink><span>&nbsp;&nbsp;</span>
      <NavLink to="/myprofile">My Profile</NavLink><span>&nbsp;&nbsp;</span>
      <button onClick = {()=>{
        logOut()
        history.push('/')
      }}>Log Out</button>
    </div>
  );
};

    
export default MyLoggedInNavBar;
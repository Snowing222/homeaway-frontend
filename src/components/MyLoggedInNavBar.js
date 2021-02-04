import { NavLink } from 'react-router-dom';

const MyNotLoggedInNavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink><span>&nbsp;&nbsp;</span>
      <NavLink to="/myprofile">My Profile</NavLink><span>&nbsp;&nbsp;</span>
      <NavLink to="/logout">Log Out</NavLink> 
    </div>
  );
};

    
export default MyNotLoggedInNavBar;
import { NavLink } from 'react-router-dom';

const MyLoggedInNavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink><span>&nbsp;&nbsp;</span>
      <NavLink to="/signup">Becomes a host</NavLink><span>&nbsp;&nbsp;</span>
      <NavLink to="/login">Log In</NavLink> 
    </div>
  );
};

    
export default MyLoggedInNavBar;
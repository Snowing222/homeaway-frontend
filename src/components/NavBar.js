import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/signup">Becomes a host</NavLink>
      <br />
      <NavLink to="/login">Log In</NavLink>
      
    </div>
  );
};

    
export default NavBar;
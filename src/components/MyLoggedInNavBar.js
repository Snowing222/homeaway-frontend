import { NavLink } from 'react-router-dom';

const MyLoggedInNavBar = ({logOut}) => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink><span>&nbsp;&nbsp;</span>
      <NavLink to="/myprofile">My Profile</NavLink><span>&nbsp;&nbsp;</span>
      <button onClick = {logOut}>Log Out</button>
    </div>
  );
};

    
export default MyLoggedInNavBar;
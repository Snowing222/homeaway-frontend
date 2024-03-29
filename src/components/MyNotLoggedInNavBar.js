import { NavLink } from "react-router-dom";
import {Navbar} from "react-bootstrap";

const MyNotLoggedInNavBar = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top" className="nav">
      <Navbar.Brand href="/"> HomeAway </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <NavLink className="nav-link" to="/signup">
          Becomes a host
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNotLoggedInNavBar;

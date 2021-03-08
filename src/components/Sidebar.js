import { Nav } from "react-bootstrap";
import "../css/Dashboard.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <NavLink
            className="nav-link"
            activeClassName="selected"
            to="/myprofile/properties"
          >
            Manage Properties
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-link"
            activeClassName="selected"
            to="/myprofile/listings"
          >
            All my listings
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;

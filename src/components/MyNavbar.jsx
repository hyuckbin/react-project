import { NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MyNavbar.module.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <NavLink to="/">React-Bootstrap</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/" className={styles.navlink}>
            Home
          </NavLink>
          <NavLink to="/newproduct" className={styles.navlink}>
            New Product
          </NavLink>
          <NavLink to="/productlist" className={styles.navlink}>
            Product List
          </NavLink>
          <NavLink to="/about" className={styles.navlink}>
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;

import { NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MyNavbar.module.css";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <NavLink to="/">Store-Management</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate("/")} className={styles.navlink}>
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/newproduct")}
            className={styles.navlink}
          >
            New Product
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/productlist")}
            className={styles.navlink}
          >
            Product List
          </Nav.Link>

          <Nav.Link
            onClick={() => navigate("/about")}
            className={styles.navlink}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;

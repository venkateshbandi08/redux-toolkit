import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          Amazon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="me-auto">
          <Nav.Link to="/products" as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div onClick={() => navigate("/cart")} className="cart-container">
            <LuShoppingCart className="cart-icon" />
            <div className="dot">
              <div> {useSelector((state) => state.cart.length) || 0} </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

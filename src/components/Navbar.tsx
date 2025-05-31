import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Navbar.css"

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#inicio">
          <img
            src="/assets/imgs/logo.png  "
            alt="QCC logo"
            height="60"
            className="d-inline-block align-top logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-qcc" />
        <Navbar.Collapse id="navbar-qcc">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#caracteristicas">Características</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <NavDropdown
              title="Más"
              id="nav-dropdown"
              menuVariant="dark"
              align="end"
            >
              <NavDropdown.Item href="#equipo">Nuestro equipo</NavDropdown.Item>
              <NavDropdown.Item href="#faq">
                Preguntas frecuentes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

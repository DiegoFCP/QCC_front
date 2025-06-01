import { Navbar, Container, Nav } from 'react-bootstrap';
import './Footer.css';

function Footer() {
return (
    <Navbar fixed="bottom" className="footer-navbar">
        <Container className="justify-content-between flex-wrap">
            <Navbar.Brand className="footer-logo">QCC</Navbar.Brand>
                <span className="footer-text">
                    &copy; {new Date().getFullYear()} QCC. Todos los derechos reservados.
                </span>
                <Nav className="footer-links">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#caracteristicas">Características</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
        </Container>
    </Navbar>
);
}

export default Footer;

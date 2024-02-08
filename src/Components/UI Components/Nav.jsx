import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import logo from '/img/logo-ts.png';

function NavBar() {
    const location = useLocation();

    const isNavLinkActive = (path) => {
        // Check if the current location matches the 'to' prop of the NavLink
        return location.pathname === path;
    };

    return (
        <header>
            <Navbar expand="lg" bg="white" variant="light" className="shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                    <Navbar.Brand as={Link} to="/" className="ms-lg-5">
                        <img src={logo} className="logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarCollapse" title="toggle navbar" />
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="ms-auto py-0">
                            <Nav.Link as={Link} to="/" className={`fw-semibold nav-link ${isNavLinkActive('/') ? 'active' : ''}`}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/About" className={`nav-link ${isNavLinkActive('/About') ? 'active' : ''}`}>About</Nav.Link>
                            <Nav.Link as={Link} to="/Services" className={`nav-link ${isNavLinkActive('/Services') ? 'active' : ''}`}>Services</Nav.Link>
                            <Nav.Link as={Link} to="/Contact" className={`nav-link ${isNavLinkActive('/Contact') ? 'active' : ''}`}>Contact</Nav.Link>
                            <Nav.Link as={Link} to="/Contact" className={`nav-link nav-item nav-contact bg-green text-light mb-0 px-4 ms-lg-5 ${isNavLinkActive('/contact') ? 'active' : ''}`}>
                                <BsTelephoneOutbound className="me-2 " />
                                +254715323621 | +254708265194
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default NavBar;

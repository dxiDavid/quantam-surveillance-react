import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import logo from '/img/logo-ts.png';

function NavBar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const isNavLinkActive = (path) => {
    // Handle the "/" route specifically for the Home link
    return (path === "/" && location.pathname === "/") || // Check for exact match of "/"
           (path !== "/" && location.pathname.startsWith(path)); // Check for paths starting with other paths (e.g., "/About", "/Services")
  };
  

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <header>
      <Navbar expand="lg" bg="white" variant="light" className="shadow-sm py-3 py-lg-0 px-3 px-lg-0" expanded={expanded}>
        <Navbar.Brand as={Link} to="/" className="ms-lg-5">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="navbarCollapse" title="toggle navbar" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto py-0">
            <Nav.Link as={Link} to="/" onClick={closeNav} className={`fw-semibold nav-link ${isNavLinkActive('/') ? 'active' : ''}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" onClick={closeNav} className={`nav-link ${isNavLinkActive('/About') ? 'active' : ''}`}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Services" onClick={closeNav} className={`nav-link ${isNavLinkActive('/Services') ? 'active' : ''}`}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/Pricing" onClick={closeNav} className={`nav-link ${isNavLinkActive('/Pricing') ? 'active' : ''}`}>
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" onClick={closeNav} className={`nav-link ${isNavLinkActive('/Contact') ? 'active' : ''}`}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" onClick={closeNav} className={`nav-link nav-item nav-contact bg-green text-light mb-0 px-4 ms-lg-5 ${isNavLinkActive('/contact') ? 'active' : ''}`}>
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

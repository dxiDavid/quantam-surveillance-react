import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGeoAlt, BsTelephone, BsEnvelopeOpen, BsTwitterX } from 'react-icons/bs';
import { FaArrowRight, FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark-green text-light mt-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
                <Container>
                    <Row className="g-5">
                        <Col lg={3} md={6}>
                            <h3 className="text-white mb-4">Quick Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <Link to="/" className="text-light mb-2 nav-link">
                                    <FaArrowRight className="text-primary me-2" />
                                    Home
                                </Link>
                                <Link to="/About" className="text-light mb-2 nav-link">
                                    <FaArrowRight className="text-primary me-2" />
                                    About Us
                                </Link>
                                <Link to="/Services" className="text-light mb-2 nav-link">
                                    <FaArrowRight className="text-primary me-2" />
                                    Our Services
                                </Link>
                                <Link to="/Contact" className="text-light nav-link">
                                    <FaArrowRight className="text-primary me-2" />
                                    Contact Us
                                </Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <h3 className="text-white mb-4">Get In Touch</h3>
                            <p className="mb-2">
                                <BsGeoAlt className="text-primary me-2" />
                                Nairobi Kenya
                            </p>
                            <p className="mb-2">
                                <BsEnvelopeOpen className="text-primary me-2" />
                                quantamsurveillance@gmail.com
                            </p>
                            <p className="mb-0">
                                <BsTelephone className="text-primary me-2" />
                                +254715323621
                            </p>
                            <p className="mb-0">
                                <BsTelephone className="text-primary me-2" />
                                +254708265194
                            </p>
                        </Col>
                        <Col lg={3} md={6}>
                            <h3 className="text-white mb-4">Follow Us</h3>
                            <div className="d-flex">
                                <Button title="Go to our Twitter page" variant="primary" className="btn-lg btn-lg-square rounded me-2" href="https://twitter.com/QuantamSurv" target="_blank" rel="noopener noreferrer">
                                    <BsTwitterX className="fw-normal" />
                                </Button>
                                <Button title="Go to our Facebook page" variant="primary" className="btn-lg btn-lg-square rounded me-2" href="https://web.facebook.com/profile.php?id=61555864221207" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="fw-normal" />
                                </Button>
                                <Button title="Go to our Tiktok page" variant="primary" className="btn-lg btn-lg-square rounded me-2" href="https://www.tiktok.com/@quantamsurveillance" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className="fw-normal" />
                                </Button>
                                <Button title="Go to our Instagram page" variant="primary" className="btn-lg btn-lg-square rounded" href="https://www.instagram.com/quantamsurveillance/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="fw-normal" />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <div className="container-fluid bg-green text-light py-4">
                <Container>
                    <Row className="g-5">
                        <Col md={6} className="text-center text-md-start">
                            <p className="mb-md-0">&copy; <Link to="#" className="text-white">Quantam Surveillance</Link>. All Rights Reserved.</p>
                        </Col>
                        {/* Uncomment if prompted by the owner of this design */}
                        {/* <Col md={6} className="text-center text-md-end">
                            <p className="mb-0">Designed by <Link to="https://htmlcodex.com" className="text-white border-bottom">HTML Codex</Link></p>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </>
    );
}

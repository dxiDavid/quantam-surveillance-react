import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGeoAlt, BsTelephone, BsEnvelopeOpen, BsTwitterX } from 'react-icons/bs';
import { FaArrowRight, FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Footer() {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
       }, []);

    return (
        <>
            <footer className="container-fluid bg-dark-green text-light mt-5 py-5">
                <Container>
                    <Row className="g-5">
                        <Col lg={3} md={6}>
                            <h3 className="text-white mb-4" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">Quick Links</h3>
                            <div className="d-flex flex-column justify-content-start" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">
                                <Link to="/" className="text-light mb-2 nav-link">
                                    <FaArrowRight className="text-primary me-2" />
                                    Home
                                </Link>
                                <Link to="/About" className="text-light mb-2 nav-link" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150">
                                    <FaArrowRight className="text-primary me-2" />
                                    About Us
                                </Link>
                                <Link to="/Services" className="text-light mb-2 nav-link" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="250">
                                    <FaArrowRight className="text-primary me-2" />
                                    Our Services
                                </Link>
                                <Link to="/Contact" className="text-light nav-link" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="350">
                                    <FaArrowRight className="text-primary me-2" />
                                    Contact Us
                                </Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <h3 className="text-white mb-4" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">Get In Touch</h3>
                            <p className="mb-2" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">
                                <BsGeoAlt className="text-primary me-2" />
                                Nairobi Kenya
                            </p>
                            <p className="mb-2" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">
                                <BsEnvelopeOpen className="text-primary me-2" />
                                quantamsurveillance@gmail.com
                            </p>
                            <p className="mb-0" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">
                                <BsTelephone className="text-primary me-2" />
                                +254715323621
                            </p>
                            <p className="mb-0" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">
                                <BsTelephone className="text-primary me-2" />
                                +254708265194
                            </p>
                        </Col>
                        <Col lg={3} md={6}>
                            <h3 className="text-white mb-4" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">Follow Us</h3>
                            <div className="d-flex">
                                <Button title="Go to our Twitter page" variant="primary" className="btn-lg btn-lg-square rounded me-2" href="https://twitter.com/QuantamSurv" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50">
                                    <BsTwitterX className="fw-normal" />
                                </Button>
                                <Button title="Go to our Facebook page" variant="primary" className="btn-lg btn-lg-square rounded me-2" href="https://web.facebook.com/profile.php?id=61555864221207" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="50">
                                    <FaFacebookF className="fw-normal" />
                                </Button>
                                <Button title="Go to our Tiktok page" variant="primary" className="btn-lg btn-lg-square rounded me-2" href="https://www.tiktok.com/@quantamsurveillance" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50">
                                    <FaTiktok className="fw-normal" />
                                </Button>
                                <Button title="Go to our Instagram page" variant="primary" className="btn-lg btn-lg-square rounded" href="https://www.instagram.com/quantamsurveillance/" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="50">
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

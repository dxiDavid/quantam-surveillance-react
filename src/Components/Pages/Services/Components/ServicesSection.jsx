import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaVideo, FaCogs, FaTools, FaWrench, FaLock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function ServicesSection() {

  useEffect(() => {
    AOS.init();
   }, []);

  return (
    <>
    <section className="container-fluid py-5">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50">
          <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Services</h5>
          <h1 className="display-5 mb-0">Our Excellent CCTV Security Services</h1>
        </div>
        <Row className="g-5">
          <Col lg={4} md={6} className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded">
              <div className="position-relative p-5">
                <FaVideo className="d-block display-1 fw-normal text-success mb-3" />
                <h5 className="text-primary mb-0">CCTV</h5>
                <h3 className="mb-3">Installation</h3>
                <p>We install CCTV cameras professionally and efficiently, ensuring optimal coverage and functionality.</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="250">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded">
              <div className="position-relative p-5">
                <FaCogs className="d-block display-1 fw-normal text-success mb-3" />
                <h5 className="text-primary mb-0">CCTV</h5>
                <h3 className="mb-3">Configuration</h3>
                <p>We configure your system according to your needs, such as resolution, storage, and network settings.</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="350">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded">
              <div className="position-relative p-5">
                <FaTools className="d-block display-1 fw-normal text-success mb-3" />
                <h5 className="text-primary mb-0">CCTV</h5>
                <h3 className="mb-3">Maintenance</h3>
                <p>We provide regular maintenance for your CCTV cameras, keeping them clean, updated, and working properly.</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="350">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded">
              <div className="position-relative p-5">
                <FaWrench className="d-block display-1 fw-normal text-success mb-3" />
                <h5 className="text-primary mb-0">CCTV</h5>
                <h3 className="mb-3">Repair &amp; Service</h3>
                <p>We repair and service your CCTV cameras in case of any damage, malfunction, or error, restoring them to their original condition.</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="350">
            <div className="service-item bg-light border-bottom border-5 border-primary rounded">
              <div className="position-relative p-5">
                <FaLock className="d-block display-1 fw-normal text-success mb-3" />
                <h5 className="text-primary mb-0">CCTV</h5>
                <h3 className="mb-3">Access Control</h3>
                <p>We enable you to control who can access your CCTV cameras and footage, using passwords, encryption, and authentication methods.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}


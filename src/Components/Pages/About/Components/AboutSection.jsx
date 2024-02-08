import { Container, Row, Col } from 'react-bootstrap';
import { FaAward } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="container-fluid py-5">
      <Container>
        <Row className="gx-5">
          <Col lg={5} className="mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded wow zoomIn" src="img/about.jpg" style={{ objectFit: 'cover' }} alt="picture of cctv cameras" />
            </div>
          </Col>
          <Col lg={7}>
            <div className="mb-4">
              <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>About Us</h5>
              <h1 className="display-5 mb-0">We Offer Quality CCTV System Installation Services</h1>
            </div>
            <h4 className="text-body fst-italic fw-bold mb-4 text-body-tertiary">
              Enhance your security with our CCTV systems, and benefit from crime deterrence, evidence collection, and remote access.
            </h4>
            <p className="mb-4 text-body-secondary">
              We offer high-quality CCTV installation
              and maintenance services at affordable prices. We have a team of experienced and
              certified technicians who can install, repair, and upgrade your CCTV system whenever
              needed.
            </p>
            <Row className="g-3">
              <Col sm>
                <div className="bg-green d-flex flex-column justify-content-center text-center border-primary border-bottom border-5 rounded p-3">
                  <FaAward className="text-white award mb-4" />
                  <h4 className="text-white mb-0">Professional</h4>
                </div>
              </Col>
              <Col sm className="">
                <div className="bg-green d-flex flex-column justify-content-center text-center border-primary border-bottom border-5 rounded p-3">
                    <FaAward className="text-white award mb-4" />
                  <h4 className="text-white mb-0">Reliable</h4>
                </div>
              </Col>
              <Col sm className="">
                <div className="bg-green d-flex flex-column justify-content-center text-center border-primary border-bottom border-5 rounded p-3">
                  <FaAward className="text-white award mb-4" />
                  <h4 className="text-white mb-0">Affordable</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsEnvelopeOpen, BsPhoneVibrate } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Contact(){

  useEffect(() => {
    AOS.init({
        once: "true",
        duration: 1500
    });
   }, []);

  return (
    <section id="" className="container-fluid py-5">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="fade-up" data-aos-delay="50">
          <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Contact Us</h5>
          <h1 className="display-5 mb-0">Please Feel Free To Contact Us</h1>
        </div>
        <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <Col md={6} className="contact-section">
            <div className=" bg-light rounded p-5">
              <div className="d-flex align-items-center mb-2 contact-details">
                <BsEnvelopeOpen className="fs-1 text-primary me-3" />
                <div className="text-start">
                  <h5 className="mb-1">Email Us</h5>
                  <span>Quantamsurveillance@gmail.com</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4 contact-details">
                <BsPhoneVibrate className="fs-1 text-primary me-3" />
                <div className="text-start">
                  <h5 className="mb-1">Call Us</h5>
                  <span>+254 715 323621</span>
                  <span> or </span>
                  <span>+254 708 265194</span>
                </div>
              </div>
              <h5 className="fst-italic">We will send some members of our team to survey the site and give you a fair and accurate quotation.</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

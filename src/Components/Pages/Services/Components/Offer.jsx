import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <section className="container-fluid bg-offer my-5 py-5">
      <Container py-5>
        <Row className="gx-5 justify-content-center">
          <Col lg={7} className="text-center">
            <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
              <h5 className="text-white text-uppercase" style={{ letterSpacing: '5px' }}>Don't Wait</h5>
              <h1 className="display-5 text-white">Protect Your Property, Get Peace of Mind</h1>
            </div>
            <p className="text-white mb-4">
              If you are interested in our CCTV installation and maintenance services, please get in touch with us today for a free consultation and quote. 
              We will be happy to answer any questions you may have and show you how CCTV can benefit you and your family.
            </p>
            <Button className="btn btn-primary py-md-3 px-md-5 me-3">
                <Link to="/Contact" className='nav-link'>Secure my property</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offer;

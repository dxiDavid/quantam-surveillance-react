import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CCTVCard({ cameras, price }) {
    return (
      <Col lg={4} className="wow slideInUp" data-wow-delay="0.3s">
        <div className="position-relative border border-primary rounded">
          <div className="bg-primary text-center pt-5 pb-4">
            <img src="img/cctv-3.png" className="cctv-icon" alt="cctv icon" />
            <h3 className="text-white">{cameras} Cameras</h3>
            <h1 className="display-4 text-white" style={{ fontSize: '2.25rem' }}>
              <small className="align-top" style={{ fontSize: '18px', lineHeight: '45px' }}>Ksh</small>{price}{'\u002A'}
            </h1>
          </div>
          <div className="text-center py-5">
            <h4 className="border-bottom border-tertiary mb-2 pb-2">What's Included</h4>
            <p className="border-bottom border-light mb-2 pb-2">High definition cameras</p>
            <p className="border-bottom border-light mb-2 pb-2">DVR(Digital video Recorder)</p>
            <p className="border-bottom border-light mb-2 pb-2">1TB Hard Disk</p>
            <p className="border-bottom border-light mb-2 pb-2">Power Supply</p>
            <p className="border-bottom border-light mb-2 pb-2">Adaptor Boxes</p>
            <p className="border-bottom border-light mb-2 pb-2">HDMI Cable</p>
          </div>
          <Button className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">
            <Link to="/Contact" className="nav-link">Get In Touch</Link> 
          </Button>
        </div>
      </Col>
    );
  };
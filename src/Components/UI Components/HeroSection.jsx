import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCircleNotch } from "react-icons/fa";

export default function HeroSection({ currentLocation }){
  return (
    <section className="container-fluid bg-primary p-5 hero-header mb-5">
      <Container>
        <Row className="py-5">
          <Col className="text-center">
            <h1 className="display-1 text-white">{currentLocation}</h1>
            <div className="breadcrumb justify-content-center align-items-center fs-4">
              <a href="/" className="text-white nav-link">Home</a>
              <FaCircleNotch className="text-white mx-2"/>
              <Link href={`/${currentLocation}`} className="text-white nav-link">{currentLocation}</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
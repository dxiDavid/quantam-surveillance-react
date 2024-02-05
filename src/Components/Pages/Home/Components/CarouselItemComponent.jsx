import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CarouselItemComponent({ image, benefit, innerRef }) {
  return (
    <BootstrapCarousel.Item ref={innerRef}>
      <img className="w-100" src={image} alt="Image" />
      <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
        <div className="p-3 hero-text">
          <h5 className="text-white text-uppercase animated bounceInDown">CCTV Benefits</h5>
          <h1 className="display-1 text-white mb-md-4 animated zoomIn">{benefit}</h1>
          <Link to="/contact" className="btn btn-primary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
        </div>
      </BootstrapCarousel.Caption>
    </BootstrapCarousel.Item>
  );
}

export default CarouselItemComponent;

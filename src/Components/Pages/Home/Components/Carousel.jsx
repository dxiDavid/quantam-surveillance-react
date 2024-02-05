import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'; // Import animate.css for animations
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <section className="container-fluid p-0 mb-5">
            <BootstrapCarousel fade controls indicators={false}>
                <BootstrapCarousel.Item>
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animated bounceInDown">CCTV Benefits</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Safe & Secure Home For Your Family</h1>
                            <Link to="/contact" className="btn btn-primary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animated bounceInDown">CCTV Benefits</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">24/7 Monitoring of Business Premises</h1>
                            <Link to="/contact" className="btn btn-primary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animated bounceInDown">CCTV Benefits</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Prevent Theft, Vandalism and Intrusion</h1>
                            <Link to="/contact" className="btn btn-primary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
            </BootstrapCarousel>
        </section>
    );
}

export default Carousel;
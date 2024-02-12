import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'; 
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <section className="container-fluid p-0 mb-5">
            <BootstrapCarousel fade controls indicators={false}>
                <BootstrapCarousel.Item>
                    <img className="w-100 carousel-image img-fluid" src="img/carousel-1.webp" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animate__animated animate__bounceInDown">CCTV Benefits</h5>
                            <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">Safe & Secure Home For Your Family</h1>
                            <Link to="/Contact" className="btn btn-primary py-md-3 px-md-5 animate__animated animate__slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <img className="w-100 carousel-image img-fluid" src="img/carousel-2.webp" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animate__animated animate__bounceInDown">CCTV Benefits</h5>
                            <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">24/7 Monitoring of Business Premises</h1>
                            <Link to="/Contact" className="btn btn-primary py-md-3 px-md-5 animate__animated animate__slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <img className="w-100 carousel-image img-fluid" src="img/carousel-3.webp" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animate__animated animate__bounceInDown">CCTV Benefits</h5>
                            <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">Prevent Theft, Vandalism and Intrusion</h1>
                            <Link to="/Contact" className="btn btn-primary py-md-3 px-md-5 animate__animated animate__slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <img className="w-100 carousel-image img-fluid" src="img/carousel-7.webp" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animate__animated animate__bounceInDown">Be prepared</h5>
                            <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">Don't wait for an incident</h1>
                            <Link to="/Contact" className="btn btn-primary py-md-3 px-md-5 animate__animated animate__slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <img className="w-100 carousel-image img-fluid" src="img/carousel-8.webp" alt="Image" />
                    <BootstrapCarousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 hero-text">
                            <h5 className="text-white text-uppercase animate__animated animate__bounceInDown">Don't Wait</h5>
                            <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">Secure Yourself Today</h1>
                            <Link to="/Contact" className="btn btn-primary py-md-3 px-md-5 animate__animated animate__slideInRight">Contact Us</Link>
                        </div>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
            </BootstrapCarousel>
        </section>
    );
}

export default Carousel;
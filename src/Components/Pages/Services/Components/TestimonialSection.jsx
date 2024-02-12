import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Humphrey Kamenyi',
      occupation: 'Business Owner',
      text: 'I am very impressed with the CCTV installation service. Very professional, efficient, and affordable.',
      image: 'img/user-icon.png',
    },
    {
      name: 'Robert Karanja',
      occupation: 'Business Owner',
      text: 'If you are looking for a reliable and quality CCTV installation company in Kenya, look no further.',
      image: 'img/user-icon.png',
    },
    {
      name: 'Nephat Njagi',
      occupation: 'Business Owner',
      text: 'They have a great selection of cameras for different applications and environments and budget.',
      image: 'img/user-icon.png',
    },
    {
      name: 'Joyce Wakuthii',
      occupation: 'Home Owner',
      text: 'I feel much safer and more secure now.',
      image: 'img/user-icon.png',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 10000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    AOS.init();
   }, []);

  return (
    <section className="container-fluid py-5">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="fade-down" data-aos-duration="1500" data-aos-delay="50">
          <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Testimonials</h5>
          <h1 className="display-5 mb-0">What People Say About Our Services</h1>
        </div>
        <div className="testimonial-carousel">
          <div className="testimonial text-center animate__animated animate__zoomIn" data-aos="fade" data-aos-duration="1500" data-aos-delay="50">
            <img className="testimonial-img img-fluid mx-auto rounded-circle" src="img/user-icon.webp" style={{ width: '100px', height: '100px' }} alt="client photo" />
            <div className="testimonial-text text-light p-4 mt-n5">
              <p className="">{testimonials[currentIndex].text}</p>
              <h4 className="text-truncate fw-bold">{testimonials[currentIndex].name}</h4>
              <p className="fst-italic">{testimonials[currentIndex].occupation}</p>
            </div>
          </div>
          <div className="testimonial-buttons">
            <button className="btn text-light bg-green" onClick={handlePrev}><IoIosArrowBack /></button>
            <button className="btn text-light bg-green" onClick={handleNext}><IoIosArrowForward /></button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;

import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PricingCard from './PricingCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const pricingData = [
  { cameras: 4, price: "38,000" },
  { cameras: 6, price: "55,000" },
  { cameras: 8, price: "78,000" },
  { cameras: 10, price: "100,000" },
  { cameras: 12, price: "146,000" },
  { cameras: 16, price: "240,000" },
];

const Pricing = () => {

  useEffect(() => {
    AOS.init();
   }, []);

  return (
    <>
      <section className="container-fluid py-5" style={{ marginBottom: '75px' }}>
        <Container>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50">
            <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Our Packages</h5>
            <h1 className="display-5 mb-0">Pricing Plan For CCTV Installation Services</h1>
          </div>
          <Row className="g-5">
            {pricingData.map((item, index) => (
              <PricingCard key={index} cameras={item.cameras} price={item.price} />
            ))}
          </Row>
        </Container>
      </section>
      <section className="pricing-disclaimer container text-danger">
        <p className="fst-italic fw-bold" style={{ fontSize: '1rem' }}>{'\u002A'}Prices do not include, cabling, transport and TVs/monitors as these may change. The packages are flexible and can be customized to fit your needs. Give us a call and make arrangements for a site visit to get accurate prices</p>
      </section>
    </>
  );
};

export default Pricing;

import ServicesSection from './Components/ServicesSection';
import Pricing from './Components/Pricing';
import Offer from './Components/Offer';

export default function Services() {
  return (
    <>
     {/* <section class="container-fluid bg-primary p-5 hero-header mb-5">
        <div class="row py-5">
            <div class="col-12 text-center">
                <h1 class="display-1 text-white">About Us</h1>
                <a href="" class="h4 text-white">Home</a>
                <i class="far fa-circle text-white px-2"></i>
                <a href="" class="h4 text-white">About</a>
            </div>
        </div>
    </section> */}
      <ServicesSection/>
      <Pricing/>
      <Offer/>
    </>
  );
}

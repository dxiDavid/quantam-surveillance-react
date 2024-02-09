import AboutSection from "../About/Components/AboutSection"
import Contact from "../Contact/Contact"
import Offer from "../Services/Components/Offer"
import Pricing from "../Services/Components/Pricing"
import ServicesSection from "../Services/Components/ServicesSection"
import TestimonialSection from "../Services/Components/TestimonialSection"
import Carousel from "./Components/Carousel"

export default function Home(){
    return(
        <main>
            <Carousel/>
            <AboutSection/>
            <ServicesSection/>
            <Pricing/>
            <Offer/>
            <TestimonialSection/>
            <Contact/>
        </main>
        
    )
}
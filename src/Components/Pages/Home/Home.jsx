import AboutSection from "../About/Components/AboutSection"
import Contact from "../Contact/Contact"
import TestimonialSection from "../Services/Components/TestimonialSection"
import Services from "../Services/Services"
import Carousel from "./Components/Carousel"

export default function Home(){
    return(
        <main>
            <Carousel/>
            <AboutSection/>
            <Services/>
            <TestimonialSection/>
            <Contact/>
        </main>
        
    )
}
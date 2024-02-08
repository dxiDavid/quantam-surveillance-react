import { Outlet } from "react-router-dom";
import Nav from "../Components/UI Components/Nav";
import Footer from "../Components/UI Components/Footer";
import HeroSection from "../Components/UI Components/HeroSection";
import { useLocation } from 'react-router-dom';

export default function Layout(){

    const location = useLocation();
    const currentLocation = location.pathname.replace('/', '')

    return(
        <>
            <Nav />
            {currentLocation !== "" && <HeroSection currentLocation={currentLocation} />}
            <Outlet />
            <Footer />
        </>
    )
}
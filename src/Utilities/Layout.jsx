import { useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Nav from "../Components/UI Components/Nav";
import Footer from "../Components/UI Components/Footer";
import HeroSection from "../Components/UI Components/HeroSection";
import { routes } from './routesDefinitions';

export default function Layout() {
  const location = useLocation();
  const definedRoutes = routes.map(route => route.path.replace('/', ''));

  return (
    <>
      <Nav />
      {location.pathname !== "/" && location.pathname !== "/Home" && (
        <HeroSection currentLocation={location.pathname.replace('/', '')} definedRoutes={definedRoutes} />
      )}
      <Outlet />
      <Footer />
    </>
  );
}

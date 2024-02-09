import Home from '../Components/Pages/Home/Home';
import About from '../Components/Pages/About/About';
import Contact from '../Components/Pages/Contact/Contact';
import Services from '../Components/Pages/Services/Services';
import Pricing from '../Components/Pages/Services/Components/Pricing';
import Error from '../Components/Pages/Error';


export const routes = [
  { path: "/Home", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Services", element: <Services /> },
  { path: "/Pricing", element: <Pricing/> },
  { path: "/Contact", element: <Contact /> },
  { path: "*", element: <Error /> }
];

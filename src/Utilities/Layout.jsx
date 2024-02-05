import { Outlet } from "react-router-dom";
import Nav from "../Components/UI Components/Nav";
import Footer from "../Components/UI Components/Footer";

export default function Layout(){
    return(
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
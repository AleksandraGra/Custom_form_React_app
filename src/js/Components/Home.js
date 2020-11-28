import React from "react";
import Portfolio from "./page_portfolio/Portfolio";
import AboutUs from "./page_about_us/About_us";
import Contact from "./page_contact/Contact";
import Footer from "./page_footer/Footer";
import Navigation from "./page_navigation/Navigation";

const Home = () => {
    return (
        <>
            <Navigation/>
            <Portfolio/>
            <AboutUs/>
            <Contact/>
            <Footer/>
        </>
    );
};


export default Home
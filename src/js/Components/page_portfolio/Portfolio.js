import React from 'react';
import './_portfolio.scss';
import Logo from "../assets/logo.png";
import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.JPG";
import Photo3 from "../assets/photo3.JPG";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="logo_portfolio"> <img src={Logo} alt="portfolio logo" className="logo_portfolio_img"/></div>
            <div className="photos_portfolio_img">
                <img src={Photo1} alt="portfolio chair" className="photo1_portfolio_img"/>
                <img src={Photo2} alt="portfolio desk" className="photo2_portfolio_img"/>
                <img src={Photo3} alt="portfolio vintage board" className="photo3_portfolio_img"/>
            </div>
        </section>
    );
};


export default Portfolio


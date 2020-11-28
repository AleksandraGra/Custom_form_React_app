import React from 'react';
import {Link} from 'react-router-dom';
import MiniLogo from '../assets/minilogo.png';
import './_navigation.scss';
import ScrollIntoView from 'react-scroll-into-view'



export default function Navigation() {

    return (
        <header className="header__lp">
                <div className="header_container_index">
                    <div className="page_logo">
                        <img src={MiniLogo} alt="navigation minilogo" className="header_image_img"/>
                    </div>
                    <ul className="page_nav">
                        <li><Link className="page_nav_menu" to="/">Strona główna</Link></li>
                        <li><ScrollIntoView className="page_nav_menu" selector="#about_us_id">O nas</ScrollIntoView></li>
                        <li><ScrollIntoView className="page_nav_menu" selector="#contact_id">Kontakt</ScrollIntoView></li>
                        <li><Link className="page_nav_menu" to="/form">Spersonalizuj zamówienie</Link></li>
                    </ul>
                </div>
        </header>);
}
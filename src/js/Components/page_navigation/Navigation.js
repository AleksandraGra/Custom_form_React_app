import React from 'react';
import {Link} from 'react-router-dom';
import MiniLogo from '../assets/minilogo.png';
import './_navigation.scss';


export default function Navigation() {
    return (
        <header className="header__lp">
                <div className="header_container_index">
                    <div className="page_logo">
                        <img src={MiniLogo} alt="navigation minilogo" className="header_image_img"/>
                    </div>
                    <nav className="page_nav">
                        <ul className="page_nav_list">
                            <li>
                                <Link to="/">Strona główna</Link>
                            </li>

                            <li>
                                <Link to="#about_us_id">O nas</Link>
                            </li>

                            <li>
                                <Link to="#contact_id">Kontakt</Link>
                            </li>

                            <li>
                                <Link to="/form">Spersonalizuj zamówienie</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>);
}
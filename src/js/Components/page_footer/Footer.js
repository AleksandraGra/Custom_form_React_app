import React from "react";
import './_footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <section id="footer_id" className="footer">
            <a href="https://www.facebook.com/nielubiepolitury/" className="footer_facebook_icon">
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
            <a href="https://www.instagram.com/nielubiepolitury/" className="footer_instagram_icon">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
        </section>
    );
};

export default Footer
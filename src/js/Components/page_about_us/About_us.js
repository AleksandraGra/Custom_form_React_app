import React from 'react';
import './_about_us.scss';


const AboutUs = () => {
    return (
        <section id="about_us_id" className="about_us">
          <h1>Nasze usługi</h1>
          <p className="about_us_text">Pragniemy podzielić się z Wami naszą pasją do staroci. Odnajdujemy i odnawiamy stare, często zapomniane meble oraz dajemy im szanse na drugie życie.</p>
          <div className="about_containers">

              <div className="about_restoration_container">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-wrench" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                            d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"/>
                  </svg>
                  <p className="about_restoration_text">renowacja mebli</p>
              </div>

              <div className="about_search_container">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fillRule="evenodd"
                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
                  <p className="about_search_text">wyszukiwanie przedmiotów vintage</p>
              </div>

          </div>
          <button className="about_us_button">Chcesz spersonalizować swoje zlecenie? kliknij</button>

        </section>
    );
};


export default AboutUs
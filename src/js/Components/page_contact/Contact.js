import React from "react";
import './_contact.scss';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const center = {
    lat: 50.05511,
    lng: 19.89319
};


function Contact() {
    const [map, setMap] = React.useState(center)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <section id="contact_id" className="contact">
            <h2>Kontakt</h2>
            <p className="contact_text">jak dojechać</p>
            <div className="contact_containers">
                <div id="map" className="contact_google_map">
                    <LoadScript googleMapsApiKey="AIzaSyB3v5t4RJTNzSNKh6isW1jVGCeQSvCD_4c">
                        <GoogleMap
                            center={center}
                            zoom={15}

                        >
                            <div id="map" className="contact_google_map"/>
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className = "contact_info">
                    <p className="contact_email">e-mail: nielubiepolutury@gmail.com</p>
                    <p className="contact_phone">tel.: +48 000 000 000</p>
                </div>
            </div>
        </section>
    )
}



export default Contact
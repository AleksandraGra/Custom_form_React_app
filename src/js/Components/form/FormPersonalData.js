import React, {useState} from "react";
import './_form.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'


const FormPersonalData = ({ forms: personal, handleChange }) => {
    const [permission, setPermission] = useState ({color:"#5B605F"})

    const changeColor = (e) => {
        setPermission(prev => ({
            color: prev.color === '#5B605F' ? '#008000' : '#5B605F'
        }))
    };

    return (
        <div className="form_data_container">
            <p className="form_data_text">Twoje dane kontaktowe:</p>

            <section className="form_data_sec1">
                <div className="form_data_sec1name">
                    <p className="form_data_1">Imię</p>
                    <input type="text" name="name" className="form_data_input" value={personal.name} onChange={handleChange}/>
                </div>
                <div className="form_data_sec1surname">
                    <p className="form_data_1">Nazwisko</p>
                    <input type="text" name="surname" className="form_data_input_1" value={personal.surname} onChange={handleChange}/>
                </div>
            </section>

            <section className="form_data_sec2">
                <span className="form_data_2">Nazwa firmy<p className="form_p">(opcjonalnie)</p></span>
                <input type="text" name="company" className="form_data_input" value={personal.company} onChange={handleChange}/>
            </section>

            <section className="form_data_sec3">
                <span className="form_data_3">Adres<p className="form_p">(Ulica, nr budynku/nr lokalu, miasto, kod pocztowy)</p></span>
                <input type="text" name="address" className="form_data_input" value={personal.address} onChange={handleChange}/>
            </section>

            <section className="form_data_sec4">
                <div className="form_data_sec4email">
                    <p className="form_data_4">email</p>
                    <input  type="email" name="email" className="form_data_input" value={personal.email} onChange={handleChange}/>
                </div>
                <div className="form_data_sec4phone">
                    <p className="form_data_5">telefon</p>
                    <input type="number" name="phone" className="form_data_input_2" value={personal.phone} onChange={handleChange}/>
                </div>
            </section>

            <div className="form_data_rodo">
                <p className="form_rodo_text">Twoje dane osobowe zostaną wykorzystane w celu przetworzenia zamówienia</p>
                <FontAwesomeIcon style={{ color: permission.color }} icon={faCheckSquare} size="2x" className="check_square_icon" value={permission.color} onClick={changeColor}>akceptuję</FontAwesomeIcon>
            </div>

        </div>
    );
};

export default FormPersonalData
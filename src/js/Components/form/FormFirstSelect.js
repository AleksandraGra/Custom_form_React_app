import React, {useState} from "react";
import './_form.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const FormFirstSelect = ({ changeOption }) => {
    const [choose, setChoose] = useState("");

    const change = e => {
        const val = +e.target.value;
        setChoose(val);
        changeOption(val)
    }

    return (
        <>
            <div className="form_button_back">
                <a href="http://localhost:3000/nielubiepolitury#/" className="form_button_icon">
                    <FontAwesomeIcon icon={faAngleLeft} className="form_button_backicon" size="2x"/>
                </a>
            </div>
            <section id="form_first_secId" className="form_first_section" >
                <p className="form_service_choose">Wybierz rodzaj usługi</p>
                <select className="form_service_select" name="choose" value={choose} onChange={change}>
                    <option value={0} className="form_service_option_empty">wybierz</option>
                    <option value={1} className="form_service_option" >renowacja</option>
                    <option value={2} className="form_service_option" >wyszukanie przedmiotu vintage</option>
            </select>
        </section>
        </>
    );
};

export default FormFirstSelect
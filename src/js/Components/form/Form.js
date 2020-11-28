import React, {useState} from "react";
import './_form.scss';
import FormRestoration from "./FormRestoration";
//import {Link} from "react-router-dom";

const Form = () => {
    const [choose, setChoose] = useState("");

    const handleChange = e => {
        setChoose(e.target.value)
    }

    return (
        <form>
            <section id="form_first_secId" className="form_first_section" >
                <p className="form_service_choose">Wybierz rodzaj usługi</p>
                <select className="form_service_select" value={choose} onChange={handleChange}>
                    <option className="form_service_option" >renowacja</option>
                    <option className="form_service_option" >wyszukanie przedmiotu vintage</option>
                </select>
            </section>
            <FormRestoration/>
        </form>
        );

    };


export default Form
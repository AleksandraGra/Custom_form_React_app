import React, {useState} from "react";
import './_form.scss';

const FormFirstSelect = ({ changeOption }) => {
    const [choose, setChoose] = useState("");

    const change = e => {
        const val = +e.target.value;
        setChoose(val);
        changeOption(val)
    }

    return (
        <section id="form_first_secId" className="form_first_section" >
            <p className="form_service_choose">Wybierz rodzaj usługi</p>
            <select className="form_service_select" value={choose} onChange={change}>
                <option value={0} className="form_service_option"> </option>
                <option value={1} className="form_service_option" >renowacja</option>
                <option value={2} className="form_service_option" >wyszukanie przedmiotu vintage</option>
            </select>
        </section>
    );
};

export default FormFirstSelect
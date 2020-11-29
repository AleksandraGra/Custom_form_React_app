import React, {useState} from "react";
import './_form.scss';

const FormSubmitButton = () => {
    const [choose, setChoose] = useState("");

    const buttonClick = e => {
        setChoose(e.target.value)
    }


    return (
        <div className="form_button_container">
            <button className="form_submit_button" value={choose} onClick={buttonClick}>Wyślij zgłoszenie</button>
        </div>
    );
};

export default FormSubmitButton
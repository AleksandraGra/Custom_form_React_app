import React, {useState} from "react";
import './_form.scss';
import{ init } from 'emailjs-com';
init("user_K8CVmHZPgBpaCnTeI3Lwb");

const FormSubmitButton = () => {
    const [submit, setSubmit] = useState("");

    const buttonClick = e => {
        setSubmit(e.target.value)
    }

    return (
        <div className="form_button_container">
            <button type="submit" className="form_submit_button" value={submit} onSubmit={buttonClick}>Wyślij zgłoszenie</button>
        </div>
    );
};

export default FormSubmitButton
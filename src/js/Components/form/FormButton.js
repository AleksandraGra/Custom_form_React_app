import React, {useState} from "react";
import './_form.scss';

const FormSubmitButton = () => {
    const [send, setSend] = useState("");

    const handleSumbit = (e) => {
        setSend(e.target.value)
    }

    return (
        <div className="form_button_container">
            <button className="form_submit_button" type="submit" name="send" value={send.send} onClick={handleSumbit}>Wyślij zgłoszenie</button>
        </div>
    );
};

export default FormSubmitButton
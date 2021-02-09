import React, {useState, useEffect} from "react";
import './_form.scss';
import FormRestoration from "./FormRestore";
import FormSearch from "./FormSearch";
import FormPersonalData from "./FormPersonalData";
import FormSubmitButton from "./FormButton";
import FormFirstSelect from "./FormFirstSelect";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init(process.env.REACT_APP_API_KEY_EMAILJS_USER);
require('dotenv').config();


const Form = (callback) => {
    const [option, setOption] = useState(0)
    const [forms, setForms] = useState({
        name:"",
        surname:"",
        company:"",
        address:"",
        email:"",
        phone:"",
        item:"",
        description:"",
        finish:"",
        pickup:"",
        expectation:"",
        descriptions:"",
        pickups:"",
        send:""
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setForms(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });

        setErrors({})
    };

    const changeOption = (option) => {
        setOption(option)
    }


    const handleSubmit = (e) => {
        const {name, value} = e.target;
        setForms(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });




    };

    const validate = () => {
        const err = {}
        if(forms.name.length <= 3) {
            err.name = "Nieporawne imię";
        }

        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(forms.email)) {
            err.email = "zły email";
        }
        console.log(Object.values(err));
        if (Object.values(err).length > 0) {
            setErrors(err)
            return false
        } else {
            return true;
        }
    }

    const sendEmail=(e)=>{
        e.preventDefault();

        if (!validate()) return;

        emailjs.sendForm(process.env.REACT_APP_API_KEY_EMAILJS_SERVICE, process.env.REACT_APP_API_KEY_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_API_KEY_EMAILJS_USER)
            .then((result) => {
                alert("Wysłano formularz, wkrótce skontaktujemy się z Tobą",result.text);
            }, (error) => {
                alert("Nie udało się wysłąć zgłoszenia. Spróbuj ponownie",error.text);
            });
        e.target.reset()

        setIsSubmitting(true);

    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <FormFirstSelect forms={forms} errors={errors} changeOption={changeOption}/>
            {option === 1 && <FormRestoration forms={forms} handleChange={handleChange}/>}
            {option === 2 && <FormSearch forms={forms} handleChange={handleChange}/>}
            <FormPersonalData errors={errors} forms={forms} handleChange={handleChange}/>
            <FormSubmitButton handleSubmit={handleSubmit}/>
        </form>
    );

};

export default Form
import React, {useState, useEffect} from "react";
import './_form.scss';
import FormRestoration from "./FormRestore";
import FormSearch from "./FormSearch";
import FormPersonalData from "./FormPersonalData";
import FormSubmitButton from "./FormButton";
import FormFirstSelect from "./FormFirstSelect";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_K8CVmHZPgBpaCnTeI3Lwb");
//import FormValidate from "./FormValidate";


const Form = (callback, validate) => {
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

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_v1rsoyi', 'template_kso4aev', e.target, 'user_K8CVmHZPgBpaCnTeI3Lwb')
            .then((result) => {
                alert("Wysłano formularz, wkrótce skontaktujemy się z Tobą",result.text);
            }, (error) => {
                alert("Nie udało się wysłąć zgłoszenia. Spróbuj ponownie",error.text);
            });
            e.target.reset()

        setErrors(validate(forms));
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
            <FormFirstSelect forms={forms} changeOption={changeOption}/>
            {option === 1 && <FormRestoration forms={forms} handleChange={handleChange}/>}
            {option === 2 && <FormSearch forms={forms} handleChange={handleChange}/>}
            <FormPersonalData forms={forms} handleChange={handleChange}/>
            <FormSubmitButton handleSubmit={handleSubmit}/>
        </form>
        );

    };

export default Form
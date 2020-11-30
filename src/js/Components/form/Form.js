import React, {useState} from "react";
import './_form.scss';
import FormRestoration from "./FormRestore";
import FormSearch from "./FormSearch";
import FormPersonalData from "./FormPersonalData";
import FormSubmitButton from "./FormButton";
import FormFirstSelect from "./FormFirstSelect";
//import {Link} from "react-router-dom";

const Form = () => {
    const [option, setOption] = useState(0)

    const [forms, setForms] = useState({
        name:"",
        surname:"",
        company:"",
        address:"",
        email:"",
        phone:""
    })

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

    return (
        <form >
            <FormFirstSelect changeOption={changeOption}/>
            {option === 1 && <FormRestoration />}
            {option === 2 && <FormSearch/>}
            <FormPersonalData forms={forms} handleChange={handleChange}/>
            <FormSubmitButton/>
        </form>
        );

    };


export default Form
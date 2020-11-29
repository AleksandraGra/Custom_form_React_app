import React, {useState} from "react";
import './_form.scss';

const FormSearch = () => {
    const [choose, setChoose] = useState("");
    const [expectation, setExpectation] = useState("")

    const handleChange = e => {
        setChoose(e.target.value)
    }

    const handleTextarea = e => {
        setExpectation(e.target.value)
    }


    return (
        <>
            <section className="form_search_sec1">
                <p className="form_search_1">Czego szukasz?</p>
                <textarea className="form_search_textarea" placeholder={'Wpisz jakiego przedmiotu poszukujesz'} value={expectation} onChange={handleTextarea}/>
            </section>

            <section className="form_search_sec2">
                <p className="form_search_2">Opisz swój mebel</p>
                <textarea className="form_search_textarea" placeholder={'Napisz coś więcej o poszukiwanym przedmiocie np. wymiary, kolor.'} value={expectation} onChange={handleTextarea}/>
            </section>

            <section  className="form_search_sec3">
                <p className="form_search_3">Wybierz formę odbioru z pracowni</p>
                <select className="form_search_sel1" value={choose} onChange={handleChange}>
                    <option className="form_search_option" >przesyłka</option>
                    <option className="form_search_option" >odbiorę osobiście</option>
                </select>
            </section>
        </>
    );
};

export default FormSearch
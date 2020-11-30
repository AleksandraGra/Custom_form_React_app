import React, {useState} from "react";
import './_form.scss';

const FormSearch = () => {
    const [restore, setRestore] = useState({expectation:"", description:"", pickup:""});

    const handleChange = e => {
        setRestore(e.target.value)
    }



    return (
        <>
            <section className="form_search_sec1">
                <p className="form_search_1">Czego szukasz?</p>
                <textarea className="form_search_textarea" placeholder={'Wpisz jakiego przedmiotu poszukujesz'} value={restore.expectation} onChange={handleChange}/>
            </section>

            <section className="form_search_sec2">
                <p className="form_search_2">Opisz cechy poszukiwanego przedmiotu</p>
                <textarea className="form_search_textarea" placeholder={'Napisz coś więcej o poszukiwanym przedmiocie np. wymiary, kolor.'} value={restore.description} onChange={handleChange}/>
            </section>

            <section  className="form_search_sec3">
                <p className="form_search_3">Wybierz formę odbioru z pracowni</p>
                <select className="form_search_sel1" value={restore.pickup} onChange={handleChange}>
                    <option className="form_search_option" >przesyłka</option>
                    <option className="form_search_option" >odbiorę osobiście</option>
                </select>
            </section>
        </>
    );
};

export default FormSearch
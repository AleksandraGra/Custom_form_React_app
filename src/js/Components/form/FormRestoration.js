import React, {useState} from "react";
import './_form.scss';

const FormRestoration = () => {
   const [choose, setChoose] = useState("");

   const handleChange = e => {
       setChoose(e.target.value)
   }

   return (
   <>
    <section className="form_restore_sec1">
        <p className="form_restore_1">Co chcesz odnowić?</p>
            <select className="form_restore_sel1" value={choose} onChange={handleChange}>
               <option className="form_restore_option" >krzesło</option>
               <option className="form_restore_option" >szafa</option>
               <option className="form_restore_option" >komoda</option>
               <option className="form_restore_option" >inne</option>
            </select>
    </section>

    <section  className="form_restore_sec3">
        <p className="form_restore_3">Wybierz wykończenie mebla</p>
             <select className="form_restore_sel3" value={choose} onChange={handleChange}>
                <option className="form_restore_option" >wosk</option>
                <option className="form_restore_option" >olej</option>
                <option className="form_restore_option" >politura</option>
                <option className="form_restore_option" >farba</option>
             </select>
    </section>

    <section  className="form_restore_sec4">
        <p className="form_restore_4">Wybierz formę dostawy do pracowni</p>
            <select className="form_restore_sel4" value={choose} onChange={handleChange}>
                <option className="form_restore_option" >przesyłka</option>
                <option className="form_restore_option" >dowóz osobisty</option>
            </select>
    </section>
   </>
       );
};

export default FormRestoration
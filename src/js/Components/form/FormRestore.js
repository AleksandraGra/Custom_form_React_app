import React, {useState} from "react";
import './_form.scss';

const FormRestoration = ({forms: restore, handleChange}) => {

   return (
   <>
    <section className="form_restore_sec1">
        <p className="form_restore_1">Co chcesz odnowić?</p>
            <select name='item' className="form_restore_sel1" value={restore.item} onChange={handleChange}>
               <option className="form_restore_option_empty" >wybierz</option>
               <option className="form_restore_option" >krzesło</option>
               <option className="form_restore_option" >szafa</option>
               <option className="form_restore_option" >komoda</option>
               <option className="form_restore_option" >inne</option>
            </select>
    </section>

    <section className="form_restore_sec2">
        <p className="form_restore_2">Opisz swój mebel</p>
        <textarea className="form_restore_textarea" placeholder={'Pamiętaj, żeby opisać aktualny stan mebla oraz oczekiwania względem renowacji'} name='description' value={restore.description} onChange={handleChange}/>
    </section>

    <section  className="form_restore_sec3">
        <p className="form_restore_3">Wybierz wykończenie mebla</p>
             <select className="form_restore_sel3" name='finish' value={restore.finish} onChange={handleChange}>
                <option className="form_restore_option_empty" >wybierz</option>
                <option className="form_restore_option" >wosk</option>
                <option className="form_restore_option" >olej</option>
                <option className="form_restore_option" >politura</option>
                <option className="form_restore_option" >farba</option>
             </select>
    </section>

    <section  className="form_restore_sec4">
        <p className="form_restore_4">Wybierz formę odbioru z pracowni</p>
            <select className="form_restore_sel4" name='pickup' value={restore.pickup} onChange={handleChange}>
                <option className="form_restore_option_empty" >wybierz</option>
                <option className="form_restore_option" >przesyłka</option>
                <option className="form_restore_option" >odbiorę osobiście</option>
            </select>
    </section>
   </>
       );
};

export default FormRestoration
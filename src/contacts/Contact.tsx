import f from "../common/styles/Container.module.css";
import React from "react";
import s from './Contact.module.css'

export function Contact() {
    return (
        <div className={s.blockContact}>
            <div className={`${f.container} ${s.contacts}`}>
                <h3> Contacts </h3>
                <form className={s.formStyle}>
                    <div className={s.input1}><input/></div>
                    <div className={s.input2}><input/></div>
                    <textarea/>
                </form>
                <button className={s.buttonContact}>Send</button>
            </div>
        </div>

    )
}
import React from "react";
import style from './Input.module.css';

const Input = (props) => {
    const {fieldGrid, inputAlign, errorMessage} = style;
    const { type, errors, label, register, targetElement, required, regex, regexErrorMessage } = props;
    return (
        <>
        <div className={fieldGrid}>
            <label style={{ color: "black" }}><strong>{label}</strong></label>
            <input className={inputAlign} type={type} {...register(targetElement, {required:false})} />
            {errors && errors[targetElement] && <p className={errorMessage}>{errors[targetElement].message}</p>}
            </div>
        </>
    )
}

export default Input;
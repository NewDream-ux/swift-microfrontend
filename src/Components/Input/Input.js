import React from "react";
import './Input.css';

const Input = (props) => {
    const { type, errors, label, register, targetElement, required, regex, regexErrorMessage } = props;
    console.log("regexErrorMessage", regexErrorMessage)
    return (
        <>
        <div className="fieldGrid">
            <label style={{ color: "black" }}><strong>{label}</strong></label>
            {console.log("regexErrorMessage", regexErrorMessage)}
            <input className="inputAlign" type={type} {...register(targetElement, {required:false})} />
            {errors && errors[targetElement] && <p className="errorMessage">{errors[targetElement].message}</p>}
            </div>
        </>
    )
}

export default Input;
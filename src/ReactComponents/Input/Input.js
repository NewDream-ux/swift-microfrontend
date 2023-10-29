import React from "react";
import './Input.css';

const Input = (props) => {
    const { type, errors, label, register, targetElement, required, regex, regexErrorMessage } = props;
    console.log("regexErrorMessage", regexErrorMessage)
    return (
        <>
        <div className="fieldGrid">
            <label style={{ color: "black" }}>{label}</label>
            <input type={type} {...register(targetElement, {pattern: { value: regex, message: regexErrorMessage }})} />
            {errors && errors[targetElement] && <p style={{color:"red", marginTop:"-5px"}}>{errors[targetElement].message}</p>}
            </div>
        </>
    )
}

export default Input;
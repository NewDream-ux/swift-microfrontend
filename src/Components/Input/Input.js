import React from "react";
import style from './Input.module.css';

const Input = (props) => {
    const {fieldGrid, inputAlign, errorMessage, summaryStyle, styleLabel, details, advanceInput} = style;
    const { type, errors, label, register, targetElement, required, regex, regexErrorMessage, componentIdentifier, disable } = props;
    return (
        <>
        <div className={`${componentIdentifier == "GroupSummary" ? summaryStyle  : componentIdentifier == "Details" ? details : componentIdentifier=="advancedSearch" ? advanceInput: fieldGrid}`}>
            <label className={styleLabel} style={{ color: "black" }}>{label}
            <input disabled={disable&& disable} className={inputAlign} type={type} {...register(targetElement, {required:false})} />
            </label>
            {errors && errors[targetElement] && <p className={errorMessage}>{errors[targetElement].message}</p>}
            </div>
        </>
    )
}

export default Input;
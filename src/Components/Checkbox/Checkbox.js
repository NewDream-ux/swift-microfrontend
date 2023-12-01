import React from "react";
import style from './Checkbox.module.css';
import Datepicker from "../DatePicker/DatePicker";

const Checkbox = (props) => {
    const {checkFields, checkAlign, summaryStyle, spanStyle, details} = style;
    const {label, componentIdentifier, register, targetElement} = props;

    return (
        <>
            <div className={`${componentIdentifier == "GroupSummary" ? summaryStyle : componentIdentifier == "Details" ? details : checkFields}`}>
                    <input type="checkbox" {...register(targetElement, {required:false})}/><span className={spanStyle}> {label  } {targetElement == "underwritingApplied" ? <Datepicker /> : null}</span>
            </div>
        </>
    )
}

export default Checkbox;
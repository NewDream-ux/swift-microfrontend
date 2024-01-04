import React from "react";
import style from './Select.module.css';

const Select = (props) => {
  const { selectFields, selectAlign, summaryStyle, styleLabel, advanceInput } = style;
  const { type, errors, label, register, option, targetElement, required, componentIdentifier, details } = props;
  return (
    <div className={`${componentIdentifier == "GroupSummary" ? summaryStyle : componentIdentifier == "GroupSummary" ? details : componentIdentifier=="advancedSearch" ? advanceInput: selectFields}`}>
      <label className={styleLabel} style={{ color: "black" }}>{label}</label>
      <select className={selectAlign} {...register(targetElement)}>
        <option></option>
        {option.map((item) => {
          return (
            <option value={item.value}>{item.text}</option>
          )
        })}
      </select>
      {errors && errors[targetElement] && <p style={{ color: "red", marginTop: "-5px" }}>{errors[targetElement].message}</p>}
    </div>
  )
}

export default Select;
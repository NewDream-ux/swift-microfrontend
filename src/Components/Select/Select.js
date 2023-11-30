import React from "react";
import style from './Select.module.css';

const Select = (props) => {
  const { selectFields, selectAlign } = style;
  const { type, errors, label, register, option, targetElement, required } = props;
  return (
    <div className={selectFields}>
      <label style={{ color: "black" }}><strong>{label}</strong></label>
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
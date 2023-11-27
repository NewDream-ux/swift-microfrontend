import React from "react";
import './Select.css';

const Select=(props)=>{
    const { type, errors, label, register, option, targetElement, required } = props;
    console.log("option", option)
    return(
        <div className="selectFields">
        <label style={{color:"black"}}><strong>{label}</strong></label>
        <select className="selectAlign" {...register(targetElement)}>
            <option></option>
          {option.map((item)=>{
              return(
                <option value={item.value}>{item.text}</option>
              )
          })}
        </select>
        {errors && errors[targetElement] && <p style={{color:"red", marginTop:"-5px"}}>{errors[targetElement].message}</p>}
        </div>
    )
}

export default Select;
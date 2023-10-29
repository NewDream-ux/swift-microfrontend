import React from "react";

const Select=(props)=>{
    const { type, errors, label, register, option, targetElement, required } = props;
    console.log("option", option)
    return(
        <>
        <label for="country" style={{color:"black"}}>{label}</label>
        <select id="country" name="country" {...register(targetElement)}>
            <option></option>
          {option.map((item)=>{
              return(
                <option value={item.value}>{item.value}</option>
              )
          })}
        </select>
        {errors && errors[targetElement] && <p style={{color:"red", marginTop:"-5px"}}>{errors[targetElement].message}</p>}
        </>
    )
}

export default Select;
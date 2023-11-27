import React from 'react';
import './Button.css';

const Button=(props)=>{
    const {type, value, isDisable, onclick} = props;

    return(
        <>
         <button className={`button ${isDisable ? `disabled` : ""}`} type={type && type} disabled={isDisable && isDisable} onClick={()=>onclick && onclick()}><strong>{value && value}</strong></button>
        </>
    )
}

export default Button;
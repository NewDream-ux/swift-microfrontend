import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
    const { button, disabled } = style;
    const { type, value, isDisable, onclick } = props;

    return (
        <>
            <button className={`${button} ${isDisable ? `${disabled}` : ""}`} type={type && type} disabled={isDisable && isDisable} onClick={() => onclick && onclick()}><strong>{value && value}</strong></button>
        </>
    )
}

export default Button;
import React from "react";
import style from './Loader.module.css'

const Loader = () => {
    const {center, loader} = style;
    return (
        <div class={center}>
            <div class={loader}></div>
        </div>
    )
}
export default Loader;
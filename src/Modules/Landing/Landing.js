import React from "react";
import HomeImage from '../../assets/icons/transparentHomeImage.png';
import style from "./Landing.module.css";
import AppConfig from "../../../app.config";

const Landing = () => {
    const {landingContainer, textSectionLeft, subContentLeft, imageSection, homeImage} = style;
    const {constantItems} = AppConfig;
    return (
        <>
            <div className={`row ${landingContainer}`}>
                <div className={`col-lg-6 ${textSectionLeft}`}>
                    <div className={subContentLeft}>
                    <h1>Welcome To <span>Swift</span>, <br />
                    Committed To The Future
                    </h1>
                    <span>Helping you maximize operations management with digitization</span><br /><br />
                    </div>
                </div>
                <div className={`col-lg-6 ${imageSection}`}>
                    <img className={homeImage} src={HomeImage} alt={constantItems.homeImageAlt}/>
                </div>
            </div>
        </>
    )
}

export default Landing;
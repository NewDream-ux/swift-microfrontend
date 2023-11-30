import React from "react";
import bupaLogoFooter from "../../assets/icons/bupaLogo.jpg";
import style from './Footer.module.css';


const Footer = () => {
    const {footer, logo, footerElements} = style;
    return (
        <>
            <div className={footer}>
                <div>
                    <img className={logo} src={bupaLogoFooter} alt="" />
                </div>
                <div className={footerElements}>
                    <ul>
                        <li>Careers | </li>
                        <li>Privacy and Cookies | </li>
                        <li>Sitemap |</li>
                        <li>Accessibility |</li>
                        <li>Legal Notices |</li>
                        <li>© Bupa 2023</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer;
import React from "react";
import bupaLogo from '../../assets/icons/bupaLogo.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
    const {navbar, logo, cmMenu, topmenu, submenu} = style;
    const Navigate = useNavigate();

    const goToHome = () => {
        Navigate("/")
    }
    return (
        <header>
            <nav className={navbar}>
                <div onClick={goToHome}>
                    <img className={logo} src={bupaLogo} alt="" />
                </div>
                <div class={cmMenu}>
                    <ul>
                        <li class={topmenu}><a>View <i class="bi bi-caret-down-fill"></i></a>
                            <ul class={submenu}>
                                <li><NavLink to="/search">Search</NavLink></li>
                                <li><a>Advanced Search</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
import React from "react";
import bupaLogo from '../../assets/icons/bupaLogo.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const Navigate = useNavigate();

    const goToHome = () => {
        Navigate("/")
    }
    return (
        <header>
            <nav className="navbar">
                <div onClick={goToHome}>
                    <img className="logo" src={bupaLogo} alt="" />
                </div>
                {/* <div className="nav-elements">
                    <ul>
                        <li><NavLink to="/search">View</NavLink></li>
                        <li><NavLink>Blog</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                    </ul>
                </div> */}

                <div class="cm-e-menu">
                    <ul>
                        <li class="topmenu"><a>View <i class="bi bi-caret-down-fill"></i></a>
                            <ul class="submenu">
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
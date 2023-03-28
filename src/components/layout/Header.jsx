import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const URL = window.location.pathname;

    return (
        <header className="header">
            <img
                src="./images/logo.png"
                alt="Logo de Kasa"
                className="header--logo"
            />
            <nav className="header--nav">
                <ul className="header--ul">
                    <li className="header--li">
                        <NavLink
                            to="/"
                            className={`header--link header--link__home ${
                                URL === '/' && 'header--link__active'
                            }`}
                        >
                            Acceuil
                        </NavLink>
                    </li>
                    <li className="header--li">
                        <NavLink
                            to="/about"
                            className={`header--link header--link__about ${
                                URL === '/about' && 'header--link__active'
                            }`}
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

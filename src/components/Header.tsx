import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header_logo_img"></img>
            </div>
            <ul className="header__list">
                <li className="heder__list__item">Main</li>
                <li className="header__list__item">About us</li>
                <li className="header__list__item">Support</li>
            </ul>
            <button className="header__Login">Log in</button>
        </header>
    );
};

export default Header;
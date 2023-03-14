import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';

const Menu = ({children}) => {
    return (
        <div className="header-items">
            <input type="checkbox" id="burger-toggle" name="burger-toggle" />
            <BurgerMenu htmlFor="burger-toggle" id="burger-bread" />

            <div className="brand header-item">
                <a href="/">
                    <img src="" alt="Some-logo-here" />
                </a>
            </div>

            <div className="right-links header-item">
                <div className="minicart">
                    <a href="#" className="cart-link">
                        <span className="cart-total-qty">999</span>
                    </a>
                </div>
            </div>
            <ul className="menu">
                {children}
            </ul>
        </div>
    )
}
export default Menu;
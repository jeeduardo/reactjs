import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import MiniCart from '../MiniCart';
import BurgerMenu from './BurgerMenu';

const Menu = ({toggleShowMiniCart, showMiniCart, children}) => {
    const contextValues = useContext(AppContext);
    const { cart } = contextValues;

    return (
        <div className="header-items">
            <input type="checkbox" id="burger-toggle" name="burger-toggle" />
            <BurgerMenu htmlFor="burger-toggle" id="burger-bread" />

            <div className="brand header-item">
                <a href="/">
                    <img src="/images/logo.svg" alt="Some-logo-here" />
                </a>
            </div>

            <div className="right-links header-item">
                <div className="minicart">
                    <a href="#" className="cart-link" onClick={toggleShowMiniCart}>
                        <span className="cart-total-qty">
                            {(cart.items_count) ? cart.items_count: 0}
                        </span>
                    </a>
                </div>
                <div className="spinner-container hidden">
                    <div className="spinner">
                        <img src="/images/spinner-200px.gif" alt="spinner" />
                    </div>
                </div>
            </div>
            <ul className="menu">
                {children}
            </ul>
            <MiniCart showMiniCart={showMiniCart} cart={cart} />
        </div>
    )
}
export default Menu;

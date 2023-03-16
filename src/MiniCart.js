import React, { useState } from 'react';
import Button from './Button';
import MiniCartItem from './MiniCart/MiniCartItem';
import { useCookies } from './UseCookies';

const MiniCart = ({showMiniCart, cart}) => {
    let miniCartContainerClasses = 'block';
    if (!showMiniCart) {
        miniCartContainerClasses += ' hidden';
    }
    console.log('MiniCart.js :: ', showMiniCart, miniCartContainerClasses);

    const goToCheckout = (e) => {
        window.location.pathname = '/checkout';
    }

    return (
        <div className="cart-content">
            
            <div id="minicart-container" className={miniCartContainerClasses}>
                <h2 className="text-center heading font-bold">My Cart</h2>
                <ol className="cart-list">
                    {cart.items && cart.items.map((cartItem, i) => <MiniCartItem cartItem={cartItem} key={i} />)}
                </ol>
                <div className="spinner-container hidden">
                    <div className="spinner">
                        spinner goes here
                    </div>
                </div>
                <div className="cart-totals">
                    <div className="cart-subtotal">
                        <span className="font-semibold">Subtotal</span>
                    </div>
                    <div className="cart-subtotal-value font-semibold">
                        <span className="currency">$</span>
                        <span className="price">999999.00</span>
                    </div>
                </div>
                <div className="cart-main-actions">
                    <div className="primary">
                        <Button className="btn btn-checkout" onClick={goToCheckout}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniCart;
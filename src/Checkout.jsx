import React, { useState } from 'react';

const Checkout = () => {
    return (
        <div id="checkout-container">
            <div className="step-container">
                <h1>Checkout</h1>
                <h3 className="estimated-total">Estimated Total</h3>
                <div className="step-content">
                    <section id="cart-summary" className="step">
                        <header className="step-header">
                            <h3>Cart Summary</h3>
                            <div className="step-toggle">
                                <div className="arrow-1"></div>
                                <div className="arrow-2"></div>
                            </div>
                        </header>
                    </section>
                </div>
            </div>
        </div>
    )
  }

export default Checkout;
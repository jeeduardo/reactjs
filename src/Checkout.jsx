import React, { useState } from 'react';
// import { CheckoutStep } from './CheckoutStep/CheckoutStep';
import { CartSummaryStepContent, CheckoutStep, ShippingStepContent } from './CheckoutStep';

const Checkout = () => {
    return (
        <div id="checkout-container">
            <div className="step-container">
                <h1>Checkout</h1>
                <h3 className="estimated-total">Estimated Total</h3>
                <div className="step-content">
                    <CheckoutStep id="cart-summary" title="Cart Summary" stepContent=<CartSummaryStepContent /> />
                    <CheckoutStep id="shipping" title="Shipping" stepContent=<ShippingStepContent /> />
                </div>
            </div>
        </div>
    )
  }

export default Checkout;
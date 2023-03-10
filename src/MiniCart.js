import React, { useState } from 'react';
import { useCookies } from './UseCookies';

const MiniCart = ({showMiniCart}) => {
    let miniCartContainerClasses = 'flex';
    if (!showMiniCart) {
        miniCartContainerClasses += ' hidden';
    }
    console.log('MiniCart.js :: ', showMiniCart, miniCartContainerClasses);

    return (
        <div className={miniCartContainerClasses}>
            Minicart goes here..
        </div>
    )
}

export default MiniCart;
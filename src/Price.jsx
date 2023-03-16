import React, { useState } from 'react';

const Price = ({price}) => {
    const formatPrice = (priceParam) => {
        let formattedPrice = 0;
        if (priceParam != undefined) {
            formattedPrice = parseFloat(priceParam).toFixed(2);
        }
        return formattedPrice.toString();
    }
    return (
        <span className="price">$ {formatPrice(price)}</span>
    )
}

export default Price;
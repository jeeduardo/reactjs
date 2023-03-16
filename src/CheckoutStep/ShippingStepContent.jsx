import React, { useState } from 'react';
import ShippingAddressForm from './ShippingAddressForm';

const ShippingStepContent = () => {
    let classes = 'shipping step-content';
    return (
        <div className={classes} role="content">
            <ShippingAddressForm />
        </div>
    )
}

export default ShippingStepContent;
import React, { useState } from 'react';

const CheckoutStep = ({id, title, stepContent}) => {
    return (
        <section className="step" id={id}>
            <header className="step-header">
                <h3>{title}</h3>
                <div className="step-toggle">
                    <div className="arrow-1"></div>
                    <div className="arrow-2"></div>
                </div>
            </header>
            {stepContent}
        </section>
    )
}

export default CheckoutStep;
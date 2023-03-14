import React from 'react';

const BurgerMenu = ({htmlFor, id}) => {
    return (
        <label htmlFor={htmlFor} id={id} className="for-menu">
            <div className="burger"></div>
            <div className="burger burger-2"></div>
            <div className="burger"></div>
        </label>
    )
}

export default BurgerMenu;
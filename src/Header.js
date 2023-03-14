import React, { useState } from 'react';

const Header = ({children}) => {
    return (
        <header className="header">
            {children}
        </header>
    )
}

export default Header;
import React, { useState } from 'react';

const LoginLink = ({toggleShowLogin}) => {
    return (
        <div className="login-link">
            <a href="#" onClick={toggleShowLogin}>Login</a>
        </div>
    )
}

export default LoginLink;
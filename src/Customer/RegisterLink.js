import React, { useState } from 'react';

const RegisterLink = ({toggleShowRegistration}) => {
    return (
        <div className="register-link">
          <a href="#" onClick={toggleShowRegistration}>Register!!!</a>
        </div>
    )
}

export default RegisterLink;
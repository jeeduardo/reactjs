import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        'Content-Type': 'application/json',
    }
};

const Register = ({showRegistration, onCloseClick}) => {
    // firstname, lastname, customer_email, password, confirm_password
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [customer_email, setCustomerEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [first_password, setFirstPassword] = useState(null);
    const [passwords_match, setPasswordsMatch] = useState(true);
    const [registration_done, setRegistrationDone] = useState(false);
    const [register_success, setRegisterSuccess] = useState(false);

    const passwordChangeHandler = (e) => {
        const confirm_password = e.target.value;
        setPasswordsMatch(first_password == confirm_password);
        if (first_password == confirm_password) {
            setPassword(confirm_password);
        }
    };

    let registrationClasses = 'register-overlay hidden';
    if (showRegistration) {
        registrationClasses = 'register-overlay';
    }
    
    const handleRegistration = (e) => {
        e.preventDefault();
        let registrationUrl = process.env.REACT_APP_BASE_URL + 'api/users';
        let storeId = process.env.REACT_APP_DEFAULT_STORE_ID;
        let websiteId = process.env.REACT_APP_DEFAULT_WEBSITE_ID;
        let payload = {
            customer: {
                email: customer_email,
                firstname,
                lastname,
                storeId,
                websiteId
            },
            password
        };
        axios.post(registrationUrl, payload, Config).then(response => {
            const { id, email } = response.data;
            if (id != undefined && email != undefined) {
                setRegisterSuccess(true);
            }
            // onCloseClick(e);
        }).catch(error => {
            console.log('Error with registration', error);
        }).finally(() => {
            // Nothing to do, for now...
        });
    }
    
    return (
        <div className={registrationClasses}>
            <div className="actions">
                <button className="btn close-btn" onClick={onCloseClick}>Close</button>
            </div>
            <div className="register-container">
                <div className="row">
                    {register_success && <span>Congratulations! You have successfully registered</span>}
                </div>
                <div className="row">
                    <div className="form-input-container">
                        <input type="text" name="firstname" className="form-input" onChange={e => setFirstname(e.target.value)} placeholder="First Name" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="form-input-container">
                        <input type="text" name="lastname" className="form-input" onChange={e => setLastname(e.target.value)} placeholder="Last Name" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="form-input-container">
                        <input type="email" name="customer_email" className="form-input" onChange={e => setCustomerEmail(e.target.value)} placeholder="E-mail address" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="form-input-container">
                        <input type="password" name="password" className="form-input" onChange={e => setFirstPassword(e.target.value)} placeholder="Password" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="form-input-container">
                        <input type="password" name="confirm_password" className="form-input" onChange={passwordChangeHandler} placeholder="Confirm Password" />
                        {(!passwords_match) && <div style={{ color: 'red' }}>Passwords don't match.</div>}
                    </div>
                </div>
        
                <div className="row">
                    <button className="btn cta-btn" onClick={handleRegistration}>Register</button>
                </div>
                
            </div>
        </div>
    )
}

export default Register;

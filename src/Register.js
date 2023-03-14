import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from './UseCookies';

const Config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        'Content-Type': 'application/json',
    }
};

const TextInput = ({type, name, onChangeFn, placeholder}) => {
    return (
        <div className="row">
            <div className="form-input-container">
                <input type={type} name={name} className="form-input" onChange={e => onChangeFn(e.target.value)} placeholder={placeholder} />
            </div>
        </div>
    )
}

const Register = ({showRegistration, onCloseClick, setIsLoggedIn, handleLogin}) => {
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [customer_email, setCustomerEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [first_password, setFirstPassword] = useState(null);
    const [passwords_match, setPasswordsMatch] = useState(true);
    const [registration_done, setRegistrationDone] = useState(false);
    const [register_success, setRegisterSuccess] = useState(false);
    const [has_errors, setHasErrors] = useState(false);
    const [error_message, setErrorMessage] = useState(null);
    const [setCookie, getCookie] = useCookies();

    let registrationClasses = 'overlay hidden';
    if (showRegistration) {
        registrationClasses = 'overlay';
    }
    
    const passwordChangeHandler = (e) => {
        const confirm_password = e.target.value;
        setPasswordsMatch(first_password == confirm_password);
        if (first_password == confirm_password) {
            setPassword(confirm_password);
        }
    };

    const constructPayload = () => {
        let storeId = process.env.REACT_APP_DEFAULT_STORE_ID;
        let websiteId = process.env.REACT_APP_DEFAULT_WEBSITE_ID;
        const email = customer_email;
        return {
            customer: { email, firstname, lastname, storeId, websiteId },
            password
        };
    }
    
    const execRegistrationApi = (registrationUrl, payload, Config) => {
        axios.post(registrationUrl, payload, Config).then(response => {
            handleRegistrationApiResponse(response);
        }).catch(error => {
            console.log('Error with registration', error);
        }).finally(() => {
            // Nothing to do, for now...
        });
    }
    
    const handleRegistrationApiResponse = (response) => {
        const { id, email } = response.data;
        if (id != undefined && email != undefined) {
            setRegisterSuccess(true);
            handleLogin(customer_email, password);
        } else {
            setHasErrors(true);
            if (response.data.message != undefined) {
                setErrorMessage(response.data.message);
            }
        }

    }
    
    const handleRegistration = (e) => {
        e.preventDefault();
        setErrorMessage(null);
        setHasErrors(false);
        setRegisterSuccess(false);

        const registrationUrl = process.env.REACT_APP_BASE_URL + 'api/users';
        let payload = constructPayload();
        execRegistrationApi(registrationUrl, payload, Config);
    }
    
    return (
        <div className={registrationClasses}>
            <div className="actions">
                <button className="btn close-btn" onClick={onCloseClick}>Close</button>
            </div>
            <div className="register-container">
                <div className="row">
                    {register_success && <span>Congratulations! You have successfully registered</span>}
                    {has_errors && <span className='error-msg'>{error_message}</span>}
                </div>

                <TextInput type="text" name="firstname" onChangeFn={setFirstname} placeholder="First Name "/>

                <TextInput type="text" name="lastname" onChangeFn={setLastname} placeholder="Last Name "/>
                
                <TextInput type="email" name="customer_email" onChangeFn={setCustomerEmail} placeholder="Your e-mail address"/>
        
                <TextInput type="password" name="password" onChangeFn={setFirstPassword} placeholder="Your password" />
                
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

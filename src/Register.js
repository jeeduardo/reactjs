import React, { useState, useEffect } from 'react';

const Register = () => {
    // firstname, lastname, customer_email, password, confirm_password
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [customer_email, setCustomerEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [first_password, setFirstPassword] = useState(null);
    const [passwords_match, setPasswordsMatch] = useState(true);
    const [registration_done, setRegistrationDone] = useState(false);

    const passwordChangeHandler = (e) => {
        const confirm_password = e.target.value;
        setPasswordsMatch(first_password == confirm_password);
    };

    let registrationClasses = 'register-overlay';
    if (registration_done) {
        registrationClasses = registrationClasses.concat(' hidden');
    }
    
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('handleRegistration', e.target);
        setRegistrationDone(true);
    }
    
    return (
        <div className={registrationClasses}>
            <div className="register-container">
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
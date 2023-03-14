import React, { useState } from 'react';

const Login = ({showLogin, toggleShowLogin, handleLogin}) => {
    
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    let loginDisplayClasses = 'overlay flex';
    if (!showLogin) {
        loginDisplayClasses += ' hidden';
    }
    return (
        <div className={loginDisplayClasses}>
            <div className="actions">
                <button className="btn close-btn" onClick={toggleShowLogin}>Close</button>
            </div>
            <div className="login-container overlay-container">
                <div className="row">
                    <div className="form-input-container">
                        <input 
                            type="text" 
                            name="username" 
                            className="form-input" 
                            onChange={e => setUsername(e.target.value)} 
                            placeholder="Username/E-mail address" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-input-container">
                        <input 
                            type="password" 
                            name="password" 
                            className="form-input" 
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password" />
                    </div>
                </div>
                <div className="row">
                    <button 
                        className="btn btn-primary" 
                        onClick={e => handleLogin(username, password)}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Register from './Register';
import React, { useState } from 'react';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  
  const toggleShowRegistration = (e) => {
    let showRegistrationFlag = showRegistration;
    showRegistrationFlag = !showRegistrationFlag;
    console.log('toggleShowRegistration :: new showRegistrationFlag', showRegistrationFlag);
    setShowRegistration(showRegistrationFlag);
  }

  return (
    <div className="App">
      <div className="main">
        <Register showRegistration={showRegistration} onCloseClick={toggleShowRegistration} />
        <div className="register-link">
          <a href="#" onClick={toggleShowRegistration}>Register</a>
        </div>
        <Catalog />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Register from './Register';
import React, { useState } from 'react';
import RegisterLink from './Customer/RegisterLink';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const toggleShowRegistration = (e) => {
    let showRegistrationFlag = showRegistration;
    showRegistrationFlag = !showRegistrationFlag;
    console.log('toggleShowRegistration :: new showRegistrationFlag', showRegistrationFlag);
    setShowRegistration(showRegistrationFlag);
  }

  return (
    <div className="App">
      <div className="main">
        <Register 
          showRegistration={showRegistration} 
          onCloseClick={toggleShowRegistration} 
          setIsLoggedIn={setIsLoggedIn} />
        {!isLoggedIn && <RegisterLink toggleShowRegistration={toggleShowRegistration} />}
        <Catalog />
      </div>
    </div>
  );
}

export default App;

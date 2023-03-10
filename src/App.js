import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Register from './Register';
import React, { useState } from 'react';
import RegisterLink from './Customer/RegisterLink';
import MiniCart from './MiniCart';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  const [showMiniCart, setShowMiniCart] = useState(false)
  
  const toggleShowRegistration = (e) => {
    let showRegistrationFlag = showRegistration;
    showRegistrationFlag = !showRegistrationFlag;
    console.log('toggleShowRegistration :: new showRegistrationFlag', showRegistrationFlag);
    setShowRegistration(showRegistrationFlag);
  }
  
  const toggleShowMiniCart = (e) => {
    let showMiniCartFlag = showMiniCart;
    showMiniCartFlag = !showMiniCartFlag;
    setShowMiniCart(showMiniCartFlag);
  }

  console.log('App :: showMiniCart', showMiniCart);
  return (
    <div className="App">
      <div className="main">
        <button onClick={toggleShowMiniCart}>Show Mini Cart (temp.)</button>
        <MiniCart showMiniCart={showMiniCart} />
        <Register 
          showRegistration={showRegistration} 
          onCloseClick={toggleShowRegistration} 
          setIsLoggedIn={setIsLoggedIn} />
          {!isLoggedIn && <RegisterLink toggleShowRegistration={toggleShowRegistration} />}
        <Catalog setShowMiniCart={setShowMiniCart} />
      </div>
    </div>
  );
}

export default App;

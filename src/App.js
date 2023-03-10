import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Register from './Register';
import React, { useState } from 'react';
import RegisterLink from './Customer/RegisterLink';
import MiniCart from './MiniCart';
import Header from './Header';
import LoginLink from './Customer/LoginLink';
import Login from './Customer/Login';
import axios from 'axios';
import { useCookies } from './UseCookies';
import Menu from './Header/Menu';
import Button from './Button';

const Config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        'Content-Type': 'application/json',
    }
};

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
    
  const [showMiniCart, setShowMiniCart] = useState(false)
  
  const [setCookie, getCookie] = useCookies();

  const toggleShowRegistration = (e) => {
    let showRegistrationFlag = showRegistration;
    showRegistrationFlag = !showRegistrationFlag;
    console.log('toggleShowRegistration :: new showRegistrationFlag', showRegistrationFlag);
    setShowRegistration(showRegistrationFlag);
  }
  
  const toggleShowLogin = (e) => {
    let showLoginFlag = showLogin;
    showLoginFlag = !showLoginFlag;
    setShowLogin(showLoginFlag);
  }
  
  const toggleShowMiniCart = (e) => {
    let showMiniCartFlag = showMiniCart;
    showMiniCartFlag = !showMiniCartFlag;
    setShowMiniCart(showMiniCartFlag);
  }

  const execLoginApi = (loginUrl, payload, Config) => {
    axios.post(loginUrl, payload, Config).then(response => {
        const { token } = response.data;
        if (token != undefined) {
            setCookie('token', token);
            setIsLoggedIn(true);
            setShowLogin(false);
        }
    }).catch(error => console.log('Error', error)).finally(() => {});
  }
  
  const handleLogin = (customer_email, password) => {
    const loginUrl = process.env.REACT_APP_BASE_URL + 'api/login';
    const username = customer_email;
    const payload = { username, password };
    execLoginApi(loginUrl, payload, Config);
  }
    
  console.log('App :: showMiniCart', showMiniCart);
  const registrationLink = <li className="menu-item"><RegisterLink toggleShowRegistration={toggleShowRegistration} /></li>;
  const loginLink  = <li className="menu-item"><LoginLink toggleShowLogin={toggleShowLogin} /></li>;
  return (
    <div className="App">
      <Header>
        <Menu>
          {!isLoggedIn && registrationLink }
          {!isLoggedIn && loginLink}
        </Menu>
      </Header>
      <div className="main">
        <Button onClick={toggleShowMiniCart} title="Show Mini Cart" className="btn btn-primary">Show Mini Cart</Button>
        <MiniCart showMiniCart={showMiniCart} />
        <Register 
          showRegistration={showRegistration} 
          onCloseClick={toggleShowRegistration} 
          setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />
        <Login 
          showLogin={showLogin} 
          toggleShowLogin={toggleShowLogin} 
          handleLogin={handleLogin} />
        <Catalog setShowMiniCart={setShowMiniCart} />
      </div>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Register from './Register';
import React, { useEffect, useState } from 'react';
import RegisterLink from './Customer/RegisterLink';
import MiniCart from './MiniCart';
import Header from './Header';
import LoginLink from './Customer/LoginLink';
import Login from './Customer/Login';
import axios from 'axios';
import { useCookies } from './UseCookies';
import Menu from './Header/Menu';
import Button from './Button';
import { AppContext } from './Context/AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from './Checkout';

const Config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        'Content-Type': 'application/json',
    }
};

function App() {
  
  const [setCookie, getCookie] = useCookies();
  const [showRegistration, setShowRegistration] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState((getCookie('token') != ''));
  const [showLogin, setShowLogin] = useState(false);
    
  const [showMiniCart, setShowMiniCart] = useState(false)
  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);

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
    e.preventDefault();
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
  
  // Load cart data
  useEffect(() => {
    const getCartUrl = process.env.REACT_APP_BASE_URL + 'api/carts/' + getCookie('token');

    axios.get(getCartUrl, Config).then(response => {
      console.log(getCartUrl + ' GET response :: ', response.data);
      setCart(response.data);
      setCartLoaded(true);
    });
  }, [cartLoaded]);
    
  console.log('App :: showMiniCart', showMiniCart);
  const registrationLink = <li className="menu-item"><RegisterLink toggleShowRegistration={toggleShowRegistration} /></li>;
  const loginLink  = <li className="menu-item"><LoginLink toggleShowLogin={toggleShowLogin} /></li>;
  return (
    <AppContext.Provider value={{ cart, setShowMiniCart }}>
      <div className="App">
        <Header>
          <Menu toggleShowMiniCart={toggleShowMiniCart} showMiniCart={showMiniCart}>
            {!isLoggedIn && registrationLink }
            {!isLoggedIn && loginLink}
            <li className="menu-item"><a href="#">Menu here</a></li>
          </Menu>
        </Header>
        <div className="main">
          <Register 
            showRegistration={showRegistration} 
            onCloseClick={toggleShowRegistration} 
            setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />
          <Login 
            showLogin={showLogin} 
            toggleShowLogin={toggleShowLogin} 
            handleLogin={handleLogin} />
          <RouterProvider router={router} />
        </div>
      </div>

    </AppContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog />
  },
  {
    path: "/checkout",
    element: <Checkout />
  }
]);
export default App;
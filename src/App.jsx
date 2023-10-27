// app.jsx

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Products from './Products/Products';
import Header from './Header/Header';
import AboutUs from './About Us/AboutUs';
import YourDetails from './Your Details/YourDetails';
import Weather from './Weather/Weather';
import Login from './Login/Login';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} /> {/*A Prop Passed to Header From App.jsx*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          {isAuthenticated && (
            <>
              <Route path="/Products" element={<Products />} />
              <Route path="/YourDetails" element={<YourDetails userDetails={userDetails} />} />
              <Route path="/Weather" element={<Weather/>} />
            </>
          )}
         <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserDetails={setUserDetails} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

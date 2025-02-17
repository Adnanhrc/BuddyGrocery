import React from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Home from "./Pages/HomePage/Home.jsx";
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Pages/Product/ProductPage.jsx';
import About from './Pages/Extra/About';
import Contact from './Pages/Extra/Contact.jsx';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ForgotPassword from './Pages/Auth/ForgotPassword';
// import Cart from './Pages/Cart/Cart';
import Cart from './Pages/Cart/Cart.jsx'
import UserProfile from './Pages/User/UserProfile';
import FAQ from './Pages/Extra/FAQ';
import Termsandconditions from './Pages/Extra/Termsandconditions';
import PrivacyPolicy from './Pages/Extra/PrivacyPolicy';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid"
          element={
            <ProductPage />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/user/:activepage' element={<UserProfile />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/termsandconditions" element={<Termsandconditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route path="*" element={<div className='errorpage'>
          <div className='back'>
            <Link to='/'>
              <a>Home</a>
            </Link>
            <Link to='/about'>
              <a>About Us</a>
            </Link>
            <Link to='/contact'>
              <a>Contact Us</a>
            </Link>

          </div>
          <h1>404 NOT FOUND</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
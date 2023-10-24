
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Header.css';
function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="header-nav">
        <div className="logo">
        <Link to="/Products">
          <img
            src="https://img.freepik.com/premium-vector/home-care-logo_590037-186.jpg"
            alt="Company Logo"
            className="logo-image"
          />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/About" className="ms-2">
              <button className="login-button">About</button>
            </Link>
          </li>
          <li>
            <Link to="/Premium" className="ms-2">
              <button className="login-button">Premium</button>
            </Link>
          </li>
          <li>
            <Link to="/Policy" className="ms-2">
              <button className="login-button">Policy</button>
            </Link>
          </li>
          <li>
            <Link to="/Payments" className="ms-2">
              <button className="login-button">Payments</button>
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="ms-2">
              <button className="login-button">ContactUs</button>
            </Link>
          </li>
          {/* Use the onClick handler to navigate to the Signup page */}
          <li>
            <button onClick={() => navigate('/Signup')} className="login-button">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;


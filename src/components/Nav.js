import React, { useState } from 'react';
import logo from '../images/Logo .svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className="logo">
        <img src={logo} alt='logo'/>
        </a>
        {/* Mobile navbar */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        {/* Nav items */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Servies</Link>
            </li>
            <li>
                <Link to="/">menu</Link>
            </li>
            <li>
                <Link to="/">Reservations</Link>
            </li>
            <li>
                <Link to="/">Order Online</Link>
            </li>
            <li>
                <Link to="/">Log In</Link>
            </li>
        </ul>
      </nav>
    );
  };

  export default Nav;
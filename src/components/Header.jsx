// import React from 'react';
// import { Link } from 'react-router-dom'; // Use Link for navigation with React Router
// import './Header.css';

// function Header ()  {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src="/Images/rightmove.png" alt="Logo" className="logo" />
//         <h1>Rightmove</h1>
//       </div>
      
      
//       <nav>
//         <ul>
//           <li><Link to="/">Property Search</Link></li>
//           <li><Link to="/property-list">Properties</Link></li>
          
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            
              <div className="logo-container">
                <h1 className="logo-text">
                  <img src="/Images/rightmove.png" alt="Logo" className="logo" />
                  <span className="logo-highlight">RightMove</span>
                </h1>
              </div>
              
            
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/property-list" 
                className={`nav-link ${isActive('/property-list') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                All Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/search" 
                className={`nav-link ${isActive('/search') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Search Properties
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
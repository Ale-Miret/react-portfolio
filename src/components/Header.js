import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <h1 className="navbar-brand" to="/">Alejandra Miret</h1>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">About Me</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
